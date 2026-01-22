import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex overflow-hidden w-full h-[60vh] md:h-screen justify-center items-center">

    
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[90%] max-w-5xl h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden">

         
          <div className="absolute inset-0 bg-neutral-200/70 backdrop-blur-xl" />

         
                   <div
            className="absolute inset-0
                       bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.6),transparent)]
                       bg-[length:200%_100%]
                       animate-[videoSkeleton_1.6s_infinite]"
          />
        


          
          <div className="absolute inset-0 shadow-inner shadow-black/10 rounded-2xl" />
        </div>
      </div>

      <video
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/video-poster.jpg"
        src="/ecom.mp4"
      />

   
      <div className="relative z-10 w-[90%] max-w-5xl rounded-2xl overflow-hidden">
        <video
          className="w-full h-full rounded-2xl object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/video-poster.jpg"
          src="/ecom.mp4"
        />
      </div>

    </div>
  )
}

export default Hero
