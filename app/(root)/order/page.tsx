'use client'

import { useCart } from '@/app/context/CartContext'
import React from 'react'

const page = () => {
  const { state, dispatch } = useCart()
  const items = state.items || []

 
  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  
  const subtotal = items.reduce((sum, item) => {
    return sum + Number(item.price) * item.quantity
  }, 0)

  const shipping = 0
  const tax = 120
  const total = subtotal + tax + shipping


    const handleRemove = (item) => {
    dispatch({
      type: 'REMOVE',
      payload: {
        id: item.id,
        size: item.size,
      },
    })
  }


  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen'>

      
      <div className='md:w-[70%] bg-white'>
        <div className='w-full px-3 md:px-16 p-4 mt-12'>

          <div className='flex mt-3 w-full justify-between'>
            <h4 className='text-xl font-semibold'>Shopping Cart</h4>
            <p className='font-medium'>{totalItems} Items</p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-xs md:text-sm text-gray-500">
                  <th className="py-3 flex font-medium">Product Details</th>
                  <th className="py-3 font-medium text-center">Quantity</th>
                  <th className="py-3 font-medium text-right">Price</th>
                  <th className="py-3 font-medium text-right">Total</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {items.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-10 text-center text-gray-500">
                      Your cart is empty
                    </td>
                  </tr>
                )}

                {items.map((item) => {
                  const price = Number(item.price)
                  const itemTotal = price * item.quantity

                  return (
                    <tr key={item.id + item.size} className="align-top">
                      <td className="py-3">
                        <div className="flex text-xs sm:text-base gap-4">
                          <img
                            src={item.image?.[0]}
                            alt={item.name}
                            className="h-12 w-12  hidden md:flex rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium mt-1 text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Size: {item.size}
                              <button onClick={()=>handleRemove(item)}  className='ml-4 text-red-500'>remove</button>
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-5 text-xs sm:text-base text-center text-gray-700">
                        {item.quantity}
                      </td>

                      <td className="py-5 text-xs sm:text-base text-right text-gray-700">
                        ₹{price.toFixed(2)}
                      </td>

                      <td className="py-5 text-right text-xs sm:text-base font-semibold text-gray-900">
                        ₹{itemTotal.toFixed(2)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <div className="md:w-[30%] bg-gray-100 p-4 mt-4">
        <div className="p-4 mt-12 space-y-5">
          <h3 className="text-xl font-semibold">Order Summary</h3>

          <hr />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">₹{tax.toFixed(2)}</span>
            </div>
          </div>

          <hr />

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Promo Code</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter code"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="rounded-md text-xs bg-black px-4 nd:text-sm text-white hover:bg-gray-800">
                Apply
              </button>
            </div>
          </div>

          <hr />

          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button className="w-full text-xs  rounded-md bg-black py-3 sm:text-sm font-medium text-white hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>

    </div>
  )
}

export default page
