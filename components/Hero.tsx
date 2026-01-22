import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex overflow-hidden w-full mt-20 sm:mt-0 h-full md:h-screen justify-center items-center">

      
      <video
        className="hidden md:block blur-3xl scale-110 absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/ecom.mp4"
      />

      
      <div className="max-w-5xl w-[90%] md:w-full rounded-2xl z-10">
        
        
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Hero"
          className="md:hidden w-full h-full rounded-xl object-cover"
        />
       <div className="mt-4 text-center px-4">
     <h2 className="text-2xl font-bold text-gray-900">
    Discover Your Style
    </h2>
  <p className="mt-2 text-xs md:hidden text-gray-700">
    Explore the latest trends in fashion, footwear, and accessories. 
    Shop now and upgrade your wardrobe with exclusive collections curated just for you.
  </p>
    
 <Link
  href="/products/men"
  className="mt-4 md:hidden inline-block px-6 py-2 text-xs font-semibold bg-black text-white rounded-lg text-center hover:bg-gray-800 transition-colors duration-200"
>
  Shop Now
</Link>


</div>

        
        <video
          className="hidden md:block w-full h-full rounded-2xl object-contain"
          autoPlay
          loop
          muted
          playsInline
          src="/ecom.mp4"
        />
      </div>

    </div>
  );
};

export default Hero;
