import { CartProvider } from '@/app/context/CartContext'
import { db } from '@/db'
import { orders, products } from '@/db/schema'
import { eq } from 'drizzle-orm'

const CartServerProvider = async ({
  children,
}: {
  children: React.ReactNode
}) => {


 const cartItems = await db
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

 
  console.log('CART ITEMS:', cartItems)

  return (
    <CartProvider initialItems={cartItems}>
      {children}
    </CartProvider>
  )
}

export default CartServerProvider
