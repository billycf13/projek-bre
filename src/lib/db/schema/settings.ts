import {
    pgTable,
    uuid,
    varchar,
    text,
    integer,
    timestamp,
    pgEnum
} from 'drizzle-orm/pg-core'

// Enums based on Aplikasi.tsx options
export const timezoneEnum = pgEnum('timezone', ['Asia/Jakarta', 'Asia/Makassar', 'Asia/Jayapura'])
export const languageEnum = pgEnum('language', ['id', 'en'])
export const dateFormatEnum = pgEnum('date_format', ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'])
export const timeFormatEnum = pgEnum('time_format', ['24h', '12h'])
export const smtpEncryptionEnum = pgEnum('smtp_encryption', ['none', 'ssl', 'tls'])

export const appSettings = pgTable('app_settings', {
    id: uuid('id').primaryKey().defaultRandom(),
    
    // Profil Aplikasi
    appName: varchar('app_name', { length: 100 }).notNull().default('Projek Bre CRM'),
    appLogo: text('app_logo'),
    appBaseUrl: text('app_base_url').notNull().default('https://app.projekbre.com'),
    
    // Preferensi Sistem
    timezone: timezoneEnum('timezone').notNull().default('Asia/Jakarta'),
    language: languageEnum('language').notNull().default('id'),
    dateFormat: dateFormatEnum('date_format').notNull().default('DD/MM/YYYY'),
    timeFormat: timeFormatEnum('time_format').notNull().default('24h'),
    
    // Pengaturan SMTP
    smtpHost: text('smtp_host'),
    smtpPort: integer('smtp_port'),
    smtpEncryption: smtpEncryptionEnum('smtp_encryption').default('tls'),
    smtpUser: text('smtp_user'),
    smtpPassword: text('smtp_password'),
    smtpFromName: varchar('smtp_from_name', { length: 100 }),
    
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type AppSettings = typeof appSettings.$inferSelect
export type NewAppSettings = typeof appSettings.$inferInsert