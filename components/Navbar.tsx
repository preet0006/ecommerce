'use client'

export const dynamic = 'force-dynamic'

import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Search, Bookmark, User, Briefcase } from "@deemlol/next-icons"
import { Submenu } from './Submenu'
import ShoppingBag from './Shop'
import { Menu } from "@deemlol/next-icons";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { submenuData } from '@/lib'

const Navbar = () => {

  const router = useRouter()
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  const submenuRef = useRef<HTMLDivElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  const [showBag,setShowBag]=useState(false)

  
  useEffect(() => {
    if (!submenuRef.current) return

    tl.current = gsap.timeline({ paused: true })
      .fromTo(
        submenuRef.current,
        { opacity: 0, y: -20, pointerEvents: 'none' },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', pointerEvents: 'auto' }
      )
  }, [])

  
  const openMenu = (category: string) => {
    if (!submenuRef.current || !tl.current) return

    if (activeCategory === category) return

   
    gsap.to(submenuRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setActiveCategory(category)
        tl.current?.restart()
      }
    })
  }


  const closeMenu = () => {
    if (!submenuRef.current) return

    gsap.to(submenuRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => setActiveCategory(null)
    })
  }

  const handleSearch = () => {
  if (!search.trim()) return

  router.push(`/products/${(search)}`)
  setSearch("")
}


  return (
    <div
      className='absolute px-6 top-3 z-50 w-full'
      onMouseLeave={closeMenu}
    >
      <div className='flex mt-1 flex-col'>
        
        <div className='py-1 w-full flex justify-between'>
          <div className=' space-x-6 hidden sm:flex px-2 bg-[#eff0f0d2] backdrop-blur-2xl'>
            {Object.keys(submenuData).map(category => (
              <h6
                key={category}
                className='cursor-pointer'
                onMouseEnter={() => openMenu(category)}
              >
                {category}
              </h6>
            ))}
          </div>

          <div className='flex space-x-2 text-center font-[650] '>
           <button className="sm:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
           <Menu size={24} /></button>

        
            <h5 className=' sm:text-xl'>OSKLEN</h5>
          </div>

          <div className='flex space-x-3 sm:space-x-3'>
            <div className='relative flex'>
              <input  value={search}
              onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                 if (e.key === "Enter") {
                    handleSearch()
                  }
                }} className='bg-[#eff0f0d2] rounded-xs outline-none' />
              <div className='absolute space-x-3 flex bottom-1 right-1'>
                
                <Search size={22} />
                 <span className='sm:hidden' onClick={()=>setShowBag(!showBag)}><Briefcase size={20} /></span>
              </div>
            </div>
            <div>
              
            </div>

            <div className=' hidden sm:flex space-x-3'>
               <User size={24} />
              <Link href={"/bookmark"}>
              <Bookmark size={24} />
              </Link>
              <span className='' onClick={()=>setShowBag(!showBag)}><Briefcase size={24} /></span>
            </div>
                       
          </div>
        </div>
            
        <div className="w-full -mt-1 bg-[#eff0f0d2] overflow-hidden">
          
       <div ref={submenuRef}>
      {activeCategory && (
      <Submenu
      title={activeCategory}
      categories={submenuData[activeCategory].categories}
      highlights={submenuData[activeCategory].highlights}
      image={submenuData[activeCategory].image}
    />
    )}
   </div>   
        </div>

             {
              showBag &&(
                <ShoppingBag setShowBag={setShowBag}/>
              )
             }

                 {
                 showMobileMenu && (
                <Submenu
                 isMobile={true}
                 allData={submenuData}
                setShowMobileMenu={setShowMobileMenu}
               
               />)}
        

      </div>
    </div>
  )
}

export default Navbar
