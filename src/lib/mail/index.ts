import nodemailer from 'nodemailer'
import { createLogger } from '@/lib/logger'
import { db, settings, eq } from '@/lib/db'


const log = createLogger('lib:mail')

/**
 * Mengambil konfigurasi SMTP secara dinamis dari Database.
 * Mengembalikan null jika konfigurasi belum diset di database.
 */
async function getSMTPConfig() {
    const dbConfig = await db.query.settings.findFirst({
        where: eq(settings.category, 'smtp')
    })

    if (dbConfig) {
        const config = dbConfig.config as any
        return {
            host: config.host,
            port: Number(config.port),
            user: config.user,
            pass: config.pass,
            from: config.from
        }
    }

    return null
}

export interface SendMailOptions {
    to: string
    subject: string
    text: string
    html?: string
}

export async function sendMail(options: SendMailOptions) {
    try {
        const config = await getSMTPConfig()

        if (!config) {
            log.warn('SMTP config is missing in database. Skipping email send.')
            return null
        }

        // Buat transporter secara dinamis agar selalu menggunakan config terbaru
        const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: config.port === 465,
            auth: {
                user: config.user,
                pass: config.pass,
            },
        })

        const info = await transporter.sendMail({
            from: config.from,
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html,
        })

        log.info({ messageId: info.messageId, to: options.to }, 'Email sent successfully')
        return info
    } catch (error) {
        log.error({ error, to: options.to }, 'Failed to send email')
        return null
    }
}