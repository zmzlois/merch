import {
    sqliteTable,
    integer,
    text,
    real,
    uniqueIndex,
    primaryKey
} from 'drizzle-orm/sqlite-core';

const base_schema = {
    id: text('id', { length: 36 }).primaryKey(),
    created_at: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updated_at: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    deleted_at: integer('deleted_at', { mode: 'timestamp' }),
}
export const users = sqliteTable('users', {
    username: text('username').notNull().unique(),
    first_name: text('first_name'),
    last_name: text('last_name'),
    email: text('email').notNull().unique(),
    password_hash: text('password_hash').notNull(),
    ...base_schema
}, (table) => ({
    usernameIdx: uniqueIndex('username_idx').on(table.username),
    emailIdx: uniqueIndex('email_idx').on(table.email)
}));

export const addresses = sqliteTable('addresses', {
    userId: integer('user_id').references(() => users.id),
    street_address: text('street_address'),
    city: text('city'),
    state: text('state'),
    postal_code: text('postal_code'),
    country: text('country'),
    is_default: integer('is_default', { mode: 'boolean' }),
    ...base_schema
});

export const categories = sqliteTable('categories', {
    name: text('name').notNull(),
    description: text('description'),
    ...base_schema
});

export const products = sqliteTable('products', {
    name: text('name').notNull(),
    description: text('description'),
    price: real('price').notNull(),
    stockQuantity: integer('stock_quantity').notNull(),
    categoryId: integer('category_id').references(() => categories.id),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    ...base_schema
});

export const orders = sqliteTable('orders', {
    user_id: integer('user_id').references(() => users.id).notNull(),
    total_amount: real('total_amount').notNull(),
    status: text('status', {
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
    }).default('Pending'),
    ...base_schema
});

export const orderItems = sqliteTable('order_items', {
    order_id: integer('order_id').references(() => orders.id).notNull(),
    product_id: integer('product_id').references(() => products.id).notNull(),
    quantity: integer('quantity').notNull(),
    price_at_time: real('price_at_time').notNull(),
    ...base_schema
});