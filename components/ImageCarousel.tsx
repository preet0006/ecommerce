export const dynamic = 'force-dynamic'

import React from 'react'



const ImageCarousel = ({ image }: any) => {
  return (
    <div className="flex mt-14 sm:mt-0 items-center w-full h-full justify-center">
      <div className="relative w-full max-w-80 sm:max-w-[400px] h-80 sm:h-[400px] rounded-xl overflow-hidden">

        
        {!image && (
          <div className="absolute inset-0 shimmer rounded-xl" />
        )}

        {image && (
          <img src={image} alt=""
            loading="lazy"
            className="w-full h-full object-cover rounded-xl image-fade-in"
          />
        )}

      </div>
    </div>
  )
}

export default ImageCarousel

