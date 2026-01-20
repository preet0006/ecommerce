'use server'

import { db } from '@/db'
import { orders } from '@/db/schema'
import { and, eq, sql } from 'drizzle-orm'

type AddToCartArgs = {
  productId: string
  quantity: number
  size?: string
  price: number
}

export async function addToCartAction({
  productId,
  quantity,
  size,
  price,
}: AddToCartArgs) {
  return await db.transaction(async (tx) => {

 
    const existing = await tx
      .select()
      .from(orders)
      .where(
        and(
          eq(orders.productId, productId),
          eq(orders.size, size),        
          eq(orders.status, 'CART')
        )
      )
      .limit(1)

    if (existing.length > 0) {
     
      const currentQty = existing[0].quantity ?? 0
      const currentTotal = Number(existing[0].totalAmount ?? 0)

      await tx
        .update(orders)
        .set({
          quantity: currentQty + quantity,
          totalAmount: currentTotal + price * quantity,
          updatedAt: new Date(),
        })
        .where(eq(orders.id, existing[0].id))

      return { success: true, type: 'UPDATED' }
    }

    await tx.insert(orders).values({
      productId,
      quantity,
      size,
      status: 'CART',
      totalAmount: price * quantity,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return { success: true, type: 'CREATED' }
  })
}


export async function increaseQtyAction(
  productId: string,
  price: number
) {
  await db
    .update(orders)
    .set({
      quantity: sql`${orders.quantity} + 1`,
      totalAmount: sql`${orders.totalAmount} + ${price}`,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(orders.productId, productId),
        eq(orders.status, 'CART')
      )
    )
}



export async function decreaseQtyAction(
  productId: string,
  price: number
) {
  const item = await db
    .select()
    .from(orders)
    .where(
      and(
        eq(orders.productId, productId),
        eq(orders.status, 'CART')
      )
    )
    .limit(1)

  if (!item.length) return

  const currentQty = item[0].quantity ?? 0

  
  if (currentQty === 1) {
    await db
      .delete(orders)
      .where(eq(orders.id, item[0].id))
    return
  }

 
  await db
    .update(orders)
    .set({
      quantity: currentQty - 1,
      totalAmount: Number(item[0].totalAmount) - price,
      updatedAt: new Date(),
    })
    .where(eq(orders.id, item[0].id))
}


export async function removeFromCartAction(productId: string) {
  await db
    .delete(orders)
    .where(
      and(
        eq(orders.productId, productId),
        eq(orders.status, 'CART')
      )
    )
}
