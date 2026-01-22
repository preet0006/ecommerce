import React from 'react'

const LoadingShimmer = () => {
  return (
    <div className="flex  flex-wrap pt-12 justify-center gap-1 sm:gap-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-[48%] sm:w-[48%] md:w-[30%] lg:w-[25%]
                     mb-4 px-1"
        >
         
          <div
            className="h-[29vh] sm:h-[40vh] md:h-[60vh]
                       bg-gray-200 rounded-xl sm:rounded-3xl
                       animate-pulse"
          />

          
          <div className="mt-3 flex flex-col items-center space-y-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
            
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingShimmer
