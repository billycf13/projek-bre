import {
    pgTable,
    uuid,
    varchar,
    jsonb,
    timestamp
} from 'drizzle-orm/pg-core'

export const settings = pgTable('settings', {
    id: uuid('id').primaryKey().defaultRandom(),
    category: varchar('category', { length: 50 }).notNull().unique(), // e.g., 'smtp', 'general'
    config: jsonb('config').notNull(), // Store settings as JSON object
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})