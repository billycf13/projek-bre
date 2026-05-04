import {
    pgTable,
    uuid,
    varchar,
    text,
    boolean,
    timestamp,
    pgEnum,
    jsonb
} from 'drizzle-orm/pg-core'

export const userRoleEnum = pgEnum('user_role', [
    'admin',
    'agent'
])

export const userStatusEnum = pgEnum('user_status', [
    'active',
    'inactive',
    'pending',
    'suspended'
])

export const users = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    fullName: varchar('full_name', { length: 100 }).notNull(),
    userName: varchar('user_name', { length: 100 }).notNull().unique(),
    email: varchar('email', { length: 100 }).notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    role: userRoleEnum('role').notNull(),
    status: userStatusEnum('status').notNull(),
    avatarUrl: text('avatar_url'),
    phoneNumber: varchar('phone_number', { length: 20 }),
    jobTitle: varchar('job_title', { length: 100 }),
    bio: text('bio'),
    
    // Security & Auth
    twoFactorEnabled: boolean('two_factor_enabled').default(false).notNull(),
    passwordChangedAt: timestamp('password_changed_at'),
    
    // Preferences
    notificationPrefs: jsonb('notification_prefs').default({
        new_message: true,
        weekly_report: true,
        login_detected: true
    }).notNull(),
    
    // Session Stats
    isOnline: boolean('is_online').default(false).notNull(),
    lastSeenAt: timestamp('last_seen_at'),
    lastLoginAt: timestamp('last_login_at'),
    lastLoginIp: varchar('last_login_ip', { length: 45 }),
    lastUserAgent: text('last_user_agent'),
    
    tokenVerification: text('token_verification'),
    tokenVerificationExpiry: timestamp('token_verification_expiry'),
    tokenResetPassword: text('token_reset_password'),
    tokenResetPasswordExpiry: timestamp('token_reset_password_expiry'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type UserRow = typeof users.$inferSelect
export type UserInsert = typeof users.$inferInsert