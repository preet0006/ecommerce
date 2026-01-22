'use client'

export const dynamic = 'force-dynamic'

import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Search, Bookmark, User, Briefcase } from "@deemlol/next-icons"
import { Submenu } from './Submenu'
import ShoppingBag from './Shop'
import ShowItem from './ShowItem'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

  const submenuData: Record<string, { categories: string[], highlights: string[], image: string }> = {
  Men: {
    categories: ["T-Shirts", "Jeans", "Jackets"],
    highlights: ["New Arrivals", "Best Sellers"],
    image: "https://plus.unsplash.com/premium_photo-1677553954020-68ac75b4e1b4?q=80&w=733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  Women: {
    categories: ["Dresses", "Tops", "Skirts"],
    highlights: ["Trending", "Discounts"],
    image: "https://images.unsplash.com/photo-1584720223124-466ff369e7c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  Shoes: {
    categories: ["Sneakers", "Formal", "Sandals"],
    highlights: ["Popular", "Limited Edition"],
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  Accessories: {
    categories: ["Bags", "Belts", "Hats"],
    highlights: ["Best Sellers", "New"],
    image: "https://images.unsplash.com/photo-1668954443591-ea2072a6b4b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  Outlet: {
    categories: ["Clearance", "Last Sizes", "Sale Items"],
    highlights: ["Discounts", "Trending"],
    image: "https://plus.unsplash.com/premium_photo-1673502752899-04caa9541a5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
}

const Navbar = () => {

  const router = useRouter()
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
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

          <div className='flex font-[650] '>
            <h5 className=' sm:text-xl'>OSKLEN</h5>
          </div>

          <div className='flex sm:space-x-3'>
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
        

      </div>
    </div>
  )
}

export default Navbar
