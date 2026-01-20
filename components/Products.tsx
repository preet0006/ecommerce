import React from 'react'
import Link from 'next/link'

const Products = ({ data }) => {
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
              alt={item.title}
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
