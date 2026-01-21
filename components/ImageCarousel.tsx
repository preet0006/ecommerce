import React from 'react'
import OgCarousel from './OgCarousel'

const ImageCarousel = ({image}:any) => {

  return (
    // <div className='w-full h-xl flex items-center justify-center '>


    


    //   {/* <OgCarousel/> */}
    // </div>


    <div className='flex mt-14 sm:mt-0   items-center  w-full h-full justify-center'>
      {/* <div className='flex w-full h-full '>
         
      </div> */}

      <div className='flex justify-center rounded-xl items-center w-full max-w-80 sm:max-w-[400px]'>
        <img className='w-full h-80 sm:h-[400px] rounded-xl object-cover ' src={image} alt="" />
       

      </div>
     
      
    </div>
  )
}

export default ImageCarousel


