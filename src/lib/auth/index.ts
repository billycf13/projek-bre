export function generateVerificationToken(length: number = 32): string {
    const array = new Uint8Array(length)
    crypto.getRandomValues(array)
    return Buffer.from(array).toString('hex')
}

export function getVerificationExpiry(hours: number = 24): Date {
    const now = new Date()
    now.setHours(now.getHours() + hours)
    return now
}