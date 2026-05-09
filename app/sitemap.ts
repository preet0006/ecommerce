import { MetadataRoute } from "next";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

const BASE_URL = "https://www.example.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productRows = await db
    .select({ id: products.id, updatedAt: products.updatedAt })
    .from(products)
    .where(eq(products.isAvailable, true));

  const categoryRows = await db
    .select({ category: products.category })
    .from(products)
    .groupBy(products.category);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/bookmark`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/order`, lastModified: new Date().toISOString() },
  ];

  const categoryRoutes = categoryRows.map((item) => ({
    url: `${BASE_URL}/products/${encodeURIComponent(item.category)}`,
    lastModified: new Date().toISOString(),
  }));

  const productRoutes = productRows.map((product) => ({
    url: `${BASE_URL}/productDetail/${product.id}`,
    lastModified: product.updatedAt?.toISOString() || new Date().toISOString(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
