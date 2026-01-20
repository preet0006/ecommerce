'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";


interface SubmenuProps {
  title: string;
  categories: string[];
  highlights: string[];
  image: string;
}


export const Submenu = ({ title, categories, highlights, image }: SubmenuProps ) => {
  const router = useRouter()



  return (

      <div className='flex justify-between w-full text-2xl font-semibold px-4 py-6'>
    <div className='flex flex-col items-center space-y-2'>
      <span className='bg-white text-[14px] rounded-4xl px-2'>Categories</span>
  
        {categories.map((item, idx) => <Link href= {`/products/${item}`} key={idx}>{item}</Link>)}
    </div>

    <div className='flex flex-col items-center space-y-2'>
      <span className='bg-white text-[14px] rounded-4xl px-2'>Highlights</span>
           {highlights.map((item, idx) => <h4 key={idx}>{item}</h4>)}

    </div>

    <div className='w-full max-w-64 h-72'>
     <img className='w-full h-full object-cover' src={image} alt={title} />
    </div>
  </div>
  )
  

}
