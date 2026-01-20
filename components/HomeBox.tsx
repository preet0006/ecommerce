import React from 'react'

const HomeBox = () => {
  return (
    <div className="h-full bg-white flex flex-col md:flex-row w-full">

      
      <div className="relative  w-full md:w-1/2 sm:min-h-screen flex flex-col">

       
        <div className="mt-12 ml-6 md:ml-12">
          <button className="text-xl sm:text-3xl font-bold">
            Clothing Shop near you
          </button>
        </div>

        
        <div className="bg-gray-200 max-w-52 text-xs sm:text-base rounded-2xl px-4 py-3 font-medium sm:max-w-xs ml-6 md:ml-12 mt-3">
          Contact Us for any inquiries +824343343193
        </div>

       
        <div className="mt-10 md:absolute md:bottom-12">

          <div className="text-[18px] md:text-[20px] py-2 ml-6 md:ml-12">

            <p className="text-gray-700 text-base font-medium">
             Shipping Available In
            </p>

            <div className="text-[12px] sm:text-[14px] md:text-[16px] mt-3 space-x-2 md:space-x-3 text-gray-600">
              <span className="px-2 py-1 bg-[#EDEDED]">India</span>
              <span className="px-2 py-1 bg-[#EDEDED]">Canada</span>
              <span className="px-2 py-1 bg-[#EDEDED]">Dubai</span>
            </div>

          </div>
        </div>

      </div>

      
      <div className="w-full mt-4 sm:mt-0 md:w-1/2 h-[50vh] md:h-screen rounded-none md:rounded-tr-2xl md:rounded-r-2xl">
        <img
          className="w-full h-[42vh] sm:h-full  object-cover md:rounded-tr-2xl"
          src="https://cdn.inspireuplift.com/seller/logo/1683624260_canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-BZb4KkCdNP0.jpg"
          alt=""
        />
      </div>

    </div>
  )
}

export default HomeBox
