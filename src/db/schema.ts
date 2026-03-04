import { PgSchema, pgSchema } from 'drizzle-orm-pg';

// Define the leads table schema
const leads = pgSchema('leads', {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'string', notNull: true },
    email: { type: 'string', notNull: true },
    phone: { type: 'string' },
    createdAt: { type: 'timestamp', default: () => 'now()' },
    updatedAt: { type: 'timestamp', default: () => 'now()', onUpdate: () => 'now()' },
});

// Export the schema
export const schema = new PgSchema({ leads });