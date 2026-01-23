import React from 'react'
import Link from 'next/link'
import LoadingShimmer from '@/app/LoadingShimmer'
import Image from 'next/image'




type Product = {
  id: string
  name: string
  thumbnail: string
  
}

type ProductsProps = {
  data: Product[]
}


const Products = ({ data }:ProductsProps) => {


  const isLoading = !data || data.length === 0

if (isLoading) {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
  <Image
    src="/okef.gif"
    alt="No categories available"
    width={360}
    height={360}
    priority
  />

  <h2 className="mt-6 text-xl font-semibold text-gray-800">
    Category Not Available
  </h2>

  <p className="mt-2 max-w-md text-sm text-gray-500">
    We’re currently expanding our product catalog.  
    Please try searching for <span className="font-medium">Men</span> or <span className="font-medium">Women</span> categories.
  </p>
</div>
  );
}

  return (
    <div className="flex flex-wrap mt-4 justify-center gap-1 sm:gap-0">


      {data.map((item) => (
        <Link
          key={item.id}
          href={`/productDetail/${item.id}`}
          className="w-[48%] sm:w-[48%] md:w-[30%] lg:w-[25%]
                     cursor-pointer mb-4"
        >
        
          <div className=" h-[29vh] sm:h-[40vh] px-4 py-3 rounded-xl md:h-[60vh] bg-[#EBEBEB]
                           sm:rounded-3xl overflow-hidden
                          flex items-center justify-center">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-full rounded-xl object-cover"
            />
          </div>

          
          <div className="mt-2 text-center">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-serif">
              {item.name}
            </p>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default Products
