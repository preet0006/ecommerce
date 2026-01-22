'use client'
import React, { useRef, useState, useTransition } from "react";
import { Bookmark } from "@deemlol/next-icons";
import { ChevronLeft2 } from "@deemlol/next-icons";
import { useCart } from "@/app/context/CartContext";
import { addToCartAction } from "@/app/actions/order.action";
import { ShoppingBag } from "@deemlol/next-icons";
import { CheckCircle } from "@deemlol/next-icons";
import gsap from "gsap";

const Info = ({product}:any) => {

  const [bookmarked, setBookmarked] = useState(false);
  const bookmarkRef = useRef<HTMLSpanElement | null>(null);
  const checkRef = useRef<HTMLSpanElement | null>(null);
  console.log(product)

   const toggleBookmark = () => {
    if (!bookmarked) {
  
      if (bookmarkRef.current) {
        gsap.to(bookmarkRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.6,           
          ease: "power2.in",
          onComplete: () => {
            setBookmarked(true);

            if (checkRef.current) {
              gsap.fromTo(
                checkRef.current,
                { scale: 0, opacity: 0, rotate: -45 },
                { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: "back.out(1.7)" }
              );
            }
          },
        });
      }
    } else {
      
      if (checkRef.current) {
        gsap.to(checkRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setBookmarked(false);

            if (bookmarkRef.current) {
              gsap.fromTo(
                bookmarkRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
              );
            }
          },
        });
      }
    }
  };


  const [isPending, startTransition] = useTransition()

  const [selectedSize, setSelectedSize] = useState('M')

  const {dispatch} = useCart()

  const handleAddToCart = () => {

  if (isPending) return
   dispatch({
    type: 'ADD',
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images,
      size:selectedSize,
    },
  })

      startTransition(() => {
      addToCartAction({
        productId: product.id,
        quantity: 1,
        price: product.price,
        size: selectedSize, 
      })
    })
  
}


  return (
    <div className="flex w-full  flex-col space-y-2">

  
    <div className="w-full flex  justify-between ">
      <button className="flex bg-gray-100 justify-center items-center "> <ChevronLeft2 size={24} color="#080808" /> <span className="text-xs mb-[0.5]">back</span></button>

       <button
      onClick={toggleBookmark}
      className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
    >
    
      {!bookmarked && (
        <span ref={bookmarkRef} className="absolute">
          <Bookmark size={24} color="#080808" />
        </span>
      )}

     
      {bookmarked && (
        <span ref={checkRef} className="absolute">
          <CheckCircle size={20} color="#080808" />
        </span>
      )}
    </button>
      </div>
  

    <div className="flex flex-col w-full p-3  bg-gradient-to-br from-[#f5f5f5] to-[#dcdcdc] shadow-sm rounded-2xl ">
      
      <div className="flex justify-between font-semibold">
        <h5 className="">{product.name}</h5>
        <span>{product.price}</span>
      </div>
      
      <div>
         <h5 className="font-bold mt-2 text-[14px]">{product.brand}</h5>
      </div>

      <div className="mt-12  flex text-[14px] justify-between ">
        
       <p className=" w-full max-w-xs">{product.description}</p>

       {/* <p>Read more</p> */}
      </div>

    </div>

   <div className="w-full flex flex-col bg-gradient-to-br from-[#f5f5f5] to-[#dcdcdc] shadow-sm rounded-2xl p-2 ">
       <div className="flex space-x-8 mt-3">
        <h5>Color</h5>
        <p>Yellow</p>
       </div>

        <div className=" w-[12px] h-[12px] ml-4 mt-6 rounded-full bg-yellow-400">
          
        </div>


        <div className="text-xs  px-2 flex justify-between  mt-4">
          <p className="font-semibold"> Fit type </p>
          <span >{product.fit}</span>
        </div>


     <div className="flex gap-3 mt-4">
   {['L','M','XS','XL','XXL'].map(size => (
    <button
      key={size}
      onClick={() => setSelectedSize(size)}
      className={`
        w-8 h-8 text-sm sm:text-base sm:w-10 sm:h-10 flex items-center justify-center
        rounded-full border transition-all duration-200
        ${selectedSize === size 
          ? 'bg-green-950 text-white border-green-950 shadow-md' 
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
      `}
    >
      {size}
    </button>
  ))}
</div>


           
           <div className="w-full flex justify-center mt-6">

             <button
             onClick={handleAddToCart}
            disabled={isPending}
            className={`
             bg-green-950 flex items-center justify-center
             text-sm sm:text-base text-white w-full
             rounded-xl py-3 transition-all
             ${isPending ? 'opacity-70 cursor-not-allowed' : ''}
           `}
         >
          {isPending ? (
            <>
              <span className="mr-2 animate-spin h-4 w-4 border-2 border-white         border-t-transparent rounded-full" />
              Adding...
              </>
              ) : (
               <>
              Add To Bag
              <ShoppingBag className="ml-3" size={18} color="#FFFFFF" />
            </>
             )}
           </button>


           
           </div>

           <p className="text-xs w-full flex justify-center mt-3 mb-3">Add to Bag
        Up to 4 installments of R$ 112.75 without interest.</p>

        
   </div>

        </div>

    
  );
};

export default Info;
