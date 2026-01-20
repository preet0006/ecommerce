import {
  pgTable,
  uuid,
  numeric,
  integer,
  text,
  timestamp,
  index,
  pgEnum,
} from "drizzle-orm/pg-core";
import { products } from "./products";



export const orderStatusEnum = pgEnum("order_status", [
  "CART",
  "PLACED",
  "PROCESSING",
  "SHIPPED",
  "DELIVERED",
]);

export const orders = pgTable(
  "orders",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    

    productId: uuid("product_id")
      .references(() => products.id)
      .notNull(),

    quantity: integer("quantity").default(1),
    size: text("size"),

    status: orderStatusEnum("status").default("CART"),

    totalAmount: numeric("total_amount", {
      precision: 10,
      scale: 2,
    }).notNull(),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    productIdx: index("order_product_idx").on(table.productId),
  })
);
