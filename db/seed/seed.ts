import { db } from "..";
import { products } from "../schema";
import { productsData } from "../data";



async function seedProducts() {
  const mappedProducts = productsData.map((item) => ({
    name: item.name,
    slug:item.name,
    description: item.description,
    price: item.price.toString(),
    discountPrice: item.discountPrice?.toString(),
    stock: Math.floor(Math.random() * 50) + 10,
    category: item.category,
    brand: item.brand,
    fit: item.fit,
    thumbnail: item.images[0],
    images: item.images,
    sizes: item.sizes,
    rating: (Math.random() * 2 + 3).toFixed(1),
    totalReviews: Math.floor(Math.random() * 300),
    isFeatured: Math.random() > 0.8,
  }));

  await db.insert(products).values(mappedProducts);

  console.log(`✅ Seeded ${mappedProducts.length} products`);
}

seedProducts()
  .then(() => process.exit(0))
  .catch(console.error);
