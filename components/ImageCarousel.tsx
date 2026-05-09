export const dynamic = 'force-dynamic'

import React from 'react'
import Image from 'next/image'



const ImageCarousel = ({ image, alt }: { image: string, alt: string }) => {
  return (
    <div className="flex mt-14 sm:mt-0 items-center w-full h-full justify-center">
      <div className="relative w-full max-w-80 sm:max-w-[400px] h-80 sm:h-[400px] rounded-xl overflow-hidden">

        
        {!image && (
          <div className="absolute inset-0 shimmer rounded-xl" />
        )}

        {image && (
          <Image src={image} alt={alt}
            fill
            className="object-cover rounded-xl image-fade-in"
          />
        )}

      </div>
    </div>
  )
}

export default ImageCarousel

