import { db } from '@/db'
import { orders, products } from '@/db/schema'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const cartItems = await db
    .select({
      id: products.id,
      name: products.name,
      image: products.images,
      price: products.price,
    })
    .from(orders)
    .innerJoin(products, eq(orders.productId, products.id))
    .where(eq(orders.status, 'CART'))

  return (
    <section className="max-w-7xl mx-auto px-4 mt-20">
      
      <div className="mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Your Favourites
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Items you’ve saved to view later
        </p>
      </div>

      
      {cartItems.length === 0 ? (
        <div className="text-center mt-24">
          <p className="text-gray-500 text-sm">
            You haven’t added any favourites yet.
          </p>
        </div>
      ) : (
      
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
            {cartItems.map((item) => (
              <Link
                key={item.id}
                href={`/productDetail/${item.id}`}
                className="group w-[220px] sm:w-[240px] md:w-[260px]
                           rounded-2xl overflow-hidden
                           bg-white border border-gray-100
                           shadow-sm hover:shadow-xl
                           hover:-translate-y-1
                           transition-all duration-300"
              >
              
                <div className="relative h-[38vh] md:h-[42vh] bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover
                               group-hover:scale-105
                               transition-transform duration-300"
                  />
                </div>

                
                <div className="p-4 text-center">
                  <p className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
                    {item.name}
                  </p>

                  <p className="mt-1 text-base font-semibold text-black">
                    ₹{item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default page
