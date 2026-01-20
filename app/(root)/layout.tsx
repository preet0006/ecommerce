import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      
  
      <div className="sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

     
      <main className="flex-1">
        {children}
      </main>

   
      <div className="mt-10">
        <Footer />
      </div>

    </div>
  )
}

export default layout
