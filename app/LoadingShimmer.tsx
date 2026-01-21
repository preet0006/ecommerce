
import React from 'react'

const LoadingShimmer = () => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide mt-6 px-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="min-w-[75%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%]
                     snap-start"
        >
        
          <div
            className="h-[30vh] sm:h-[40vh] md:h-[55vh]
                       bg-gray-200 rounded-2xl
                       animate-pulse"
          />

          
          <div className="mt-3 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingShimmer
