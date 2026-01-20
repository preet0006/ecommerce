import Link from 'next/link'
import React from 'react'

const ShowItem = ({data =[]}) => {
  return (

    <div className="flex sm:gap-4 overflow-x-auto whitespace-nowrap w-full no-scrollbar">

     
      {data.map((item, idx) => (

        <Link  key={item.id}
          href={`/productDetail/${item.id}`}
          
          className="flex-shrink-0 w-[220px] md:w-[400px]"
        >
          
          <div className="rounded-xs sm:rounded-3xl  h-[38vh] md:h-[70vh] bg-[#EBEBEA] overflow-hidden">
            <img
              className="w-full h-full object-cover "
              src={item.images}
              alt="Tshirt"
            />
          </div>

         
          <div className="mt-3 text-center">
            <p className="text-sm md:text-base font-medium text-black">
              {item.name}
            </p>
            <p className="text-xs md:text-sm text-gray-600">
             {item.price}
            </p>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default ShowItem
