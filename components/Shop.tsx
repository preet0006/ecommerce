"use client";
import { decreaseQtyAction, increaseQtyAction, removeFromCartAction } from "@/app/actions/order.action";
import { useCart } from "@/app/context/CartContext";
import React from "react";

const ShoppingBag = () => {
  const { state, dispatch } = useCart();
  console.log(state)

  
  const totalItems = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increaseQty = async(id:string, qty:number, price:number) => {
    dispatch({
      type: "UPDATE_QTY",
      payload: { id, quantity: qty + 1 },
    });

    await increaseQtyAction(id, price)
  };

  const decreaseQty = async(id:string, qty:number,price: number) => {
    if (qty === 1) return;
    dispatch({
      type: "UPDATE_QTY",
      payload: { id, quantity: qty - 1 },
    });
    await decreaseQtyAction(id,price)
    
  };

  const removeItem = async(id:string) => {
    dispatch({ type: "REMOVE", payload: id });
     await removeFromCartAction(id)
  };


  return (
    <div className="fixed relaltive top-14 h-[470px] right-4 sm:w-[450px] sm:h-[600px] bg-[#F1F1F1] rounded-3xl shadow-xl overflow-hidden z-50">

      <div className="flex  justify-between items-center px-5 py-4 bg-white">
        <button className="text-sm text-gray-500">To close</button>
        <div className="text-sm font-semibold">
          Bag{" "}
          <span className="ml-1 bg-gray-200 px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        </div>
      </div>

      <div className="px-5 py-3 text-sm text-gray-600">

       <p className="text-xs sm:text-base">Add another <span className="font-semibold">R$ 653</span> worth of products to qualify for free shipping.</p> 

        <div className="w-full h-1 bg-gray-300 rounded-full mt-2">
          <div className="w-[40%] h-1 bg-black rounded-full" />
        </div>
      </div>

     <div className="mx-4 rounded-2xl p-4 mt-3 overflow-y-auto max-h-[320px]">

        {state.items.length === 0 ? (
          <p className="text-sm text-gray-500">Cart is empty</p>
        ) : (
          state.items.map((item) => (
            <div key={item.id} className="flex gap-4 mb-4">

              <img
                src={item.image}
                className="w-14 h-14 sm:w-[90px] sm:h-[120px] object-cover rounded-lg"
                alt="product"
              />

              <div className="flex flex-col flex-1">
                <h6 className="font-medium text-sm">{item.name}</h6>
                <p className="text-xs text-gray-500 mt-1">{item.size}</p>

                <div className="flex items-center gap-3 mt-3 border rounded-full w-fit px-3 py-1">
                  <button
                    className="text-sm"
                    onClick={() => decreaseQty(item.id, item.quantity,item.price)}
                  >
                    −
                  </button>

                  <span className="text-sm">{item.quantity}</span>

                  <button
                    className="text-sm"
                    onClick={() => increaseQty(item.id, item.quantity,item.price)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <span className="font-medium text-sm">
                  R$ {item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-gray-400 hover:text-black"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-white absolute bottom-0 sm:bottom-2 w-full px-5 py-6 text-xs sm:text-base rounded-t-3xl">
        <div className="flex justify-between text-sm mb-3">
          <span>Total</span>
          <span className="font-semibold">R$ {totalPrice}</span>
        </div>

        <button className="w-full bg-[#3A3A3A] text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition">
          Complete Purchase
        </button>

        <button className="w-full text-sm text-gray-500 mt-3">
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default ShoppingBag;
