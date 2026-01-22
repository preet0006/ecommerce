import Footer from '@/components/Footer'
import HomeBox from '@/components/HomeBox'
import HomeVariety from '@/components/HomeVariety'
import React from 'react'
import Navbar from '@/components/Navbar'
import { products } from '@/db/schema'
import { db } from '@/db'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import Hero from '@/components/Hero'



const page = async() => {

 const productData = await db
  .select()
  .from(products)
  .where(eq(products.category, "Women Tops"))
  .limit(5);



  return (

    <div className='flex px-2  z-10 space-y-3 md:space-y-6 flex-col w-full h-full '>
        

    <div className='w-full h-full'>
       
       <Hero/>
    

    </div>


    <div className='h-screen  px-3  gap-4 justify-center w-full  flex flex-col md:flex-row '>
         
      <Link  href={`/products/Men T-Shirt`} className='relative flex  w-full max-w-screen h-[40vh] md:h-[90vh] md:max-w-[48%] '>
          <img className='w-full h-full rounded-2xl  object-cover' src="./men.avif"      alt="" />
          <div className=' flex absolute w-full h-full  items-center justify-center '>
            <button className='bg-white/30 cursor-pointer backdrop-blur-md border border-white/20 text-2xl  px-4 py-1 rounded-3xl transition font-semibold'>Men</button>

          </div>
          

        </Link>

         <Link  href={`/products/Women Tops`} className='relative flex  w-full max-w-screen h-[40vh] md:h-[90vh] md:max-w-[48%] '>
          <img className='w-full h-full rounded-2xl  object-cover' src="/image.webp"      alt="" />
          <div className=' flex absolute w-full h-full items-center justify-center '>
            <button className='bg-white/30 cursor-pointer backdrop-blur-md border border-white/20 text-2xl  px-4 py-1 rounded-3xl transition font-semibold'>Women</button>

          </div>
          

          </Link>

  </div>


     <div className='flex px-6 w-full  h-full flex-col'>
          
          <div className='flex  flex-col '>

            <div className='space-x-4 text-xs sm:text-[14px] font-normal'>
            <button >Winter Party </button>
             <button>Shop All </button>
              </div>
           
           <div className='flex pt-4  max-w-3xl'>
              <p className='font-medium hidden sm:block text-center sm:text-start text-[16px] sm:text-[18px]'> Shop smarter with a platform built for speed, simplicity, and trust. Find your favorites, add to cart, and enjoy hassle-free checkout in just a few clicks.</p>

           </div>

          </div>
  
        <div className=' flex mt-8 w-full '>
           <HomeVariety data={productData} />


        </div>
    

        

      </div>



     <div className=' flex  w-full  h-full flex-col  '>
        
        <HomeBox/>

     </div>


      <div className='w-full   items-center justify-center flex sm:min-h-screen   bg-white'>

             <div className="flex w-full mt-5 h-[40vh] sm:h-full max-w-5xl overflow-hidden rounded-2xl">
                 <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="./op.mp4"
                />
        </div>



       </div>


       




      </div>
  )
}

export default page