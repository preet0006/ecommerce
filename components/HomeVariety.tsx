import React from 'react'
import { types } from '@/lib'
import ShowItem from './ShowItem'
import Link from 'next/link'

const HomeVariety = ({data}:any) => {


    
  return (
    <div className='flex flex-col   w-full h-full '>
     
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap sm:flex-wrap sm:overflow-visible">
        {
            types.map((e,idx)=>(
                 <Link href={`/products/${e}`} key={idx} className='text-[12px] sm:text-[14px] text-black '>
                <button className='bg-white cursor-pointer px-4 py-1'>{e}</button>
                </Link>

            ))
        }

     </div>
     
     <div className='mt-10'>
        <ShowItem data ={data}/>
     </div>
        
        
       
        
        </div>
  )
}

export default HomeVariety