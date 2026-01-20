import {
  pgTable,
  uuid,
  text,
  numeric,
  integer,
  boolean,
  timestamp,
  jsonb,
  index,
} from "drizzle-orm/pg-core";


export const products = pgTable(
  "products",
  {
    id: uuid("id").defaultRandom().primaryKey(),

  
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    description: text("description"),

    
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    discountPrice: numeric("discount_price", {
      precision: 10,
      scale: 2,
    }),

   
    stock: integer("stock").default(0),
    isAvailable: boolean("is_available").default(true),

    
    category: text("category").notNull(),
    brand: text("brand"),

    fit:text("fit"),

    thumbnail: text("thumbnail").notNull(),
    images: jsonb("images").$type<string[]>().default([]),

   
    sizes: jsonb("sizes").$type<string[]>().default([]), 

    
    rating: numeric("rating", { precision: 2, scale: 1 }).default("0"),
    totalReviews: integer("total_reviews").default(0),

   
    isFeatured: boolean("is_featured").default(false),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    categoryIdx: index("product_category_idx").on(table.category),
    slugIdx: index("product_slug_idx").on(table.slug),
  })
);
