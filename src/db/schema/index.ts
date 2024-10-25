import { integer, pgTable, varchar, numeric } from "drizzle-orm/pg-core";

export const cartTable = pgTable("cart", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  product: varchar(),
  quantity: integer().notNull(),

  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  address: varchar({ length: 500 }).notNull(),
  price: numeric().notNull(),
});
