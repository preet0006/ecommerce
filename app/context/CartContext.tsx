'use client'

import React, { createContext, useContext, useReducer } from 'react'

type CartItem = {
  id: string
  name: string
  price: number
  image?: string
  quantity: number
  size:string
}

type CartState = {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE'; payload: { id: string; size: string } }
  | { type: 'CLEAR' }
  | { type: 'UPDATE_QTY'; payload: { id: string; quantity: number } }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
   case 'ADD': {
     const exists = state.items.find(
    item =>
      item.id === action.payload.id &&
      item.size === action.payload.size
  )

  if (exists) {
    return {
      items: state.items.map(item =>
        item.id === action.payload.id &&
        item.size === action.payload.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }
  }

  return {
    items: [...state.items, { ...action.payload, quantity: 1 }],
  }
}


    case 'UPDATE_QTY':
      return {
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }

    case 'REMOVE':
       return {
        items: state.items.filter(
          item =>
            !(
              item.id === action.payload.id &&
              item.size === action.payload.size
            )
        ),
      }

    case 'CLEAR':
      return { items: [] }

    default:
      return state
  }
}

export const CartProvider = ({
  children,
  initialItems = [],
}: {
  children: React.ReactNode
  initialItems?: CartItem[]
}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: initialItems,
  })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}
