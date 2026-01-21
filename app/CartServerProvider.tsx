import { CartProvider } from '@/app/context/CartContext'
import { db } from '@/db'
import { orders, products } from '@/db/schema'
import { eq } from 'drizzle-orm'

const CartServerProvider = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const cartItemsRaw = await db
    .select({
      id: products.id,
      name: products.name,
      image: products.images,
      quantity: orders.quantity,
      price: products.price,
      size: orders.size,
    })
    .from(orders)
    .innerJoin(products, eq(orders.productId, products.id))
    .where(eq(orders.status, 'CART'))

  
  const cartItems = cartItemsRaw.map(item => ({
    id: item.id,
    name: item.name,
    price: Number(item.price),          
    quantity: item.quantity ?? 1,        
    size: item.size ?? 'DEFAULT',        
    image: item.image?.[0],              
  }))

  return (
    <CartProvider initialItems={cartItems}>
      {children}
    </CartProvider>
  )
}

export default CartServerProvider
