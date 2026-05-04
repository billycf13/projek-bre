import {
    pgTable,
    uuid,
    varchar,
    text,
    boolean,
    timestamp,
    pgEnum
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
    isOnline: boolean('is_online').default(false).notNull(),
    lastSeenAt: timestamp('last_seen_at'),
    tokenVerification: text('token_verification'),
    tokenVerificationExpiry: timestamp('token_verification_expiry'),
    tokenResetPassword: text('token_reset_password'),
    tokenResetPasswordExpiry: timestamp('token_reset_password_expiry'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type UserRow = typeof users.$inferSelect
export type UserInsert = typeof users.$inferInsert