export const dynamic = 'force-dynamic'


import Comments from '@/components/Comments'
import HomeVariety from '@/components/HomeVariety'
import ImageCarousel from '@/components/ImageCarousel'
import Info from '@/components/Info'
import OgCarousel from '@/components/OgCarousel'
import Products from '@/components/Products'
import Question from '@/components/question'
import ShowItem from '@/components/ShowItem'
import { db } from '@/db'
import { products } from '@/db/schema'
import { and, eq, ne } from 'drizzle-orm'


const page = async({params}:{params:{id:string}}) => {

    const { id } = await params;
  

   const [product] = await db
    .select()
    .from(products)
    .where(eq(products.id, id)); 


   if (!product) {
    return <div>Product not found</div>
  }

  const productcategory = product.category
  console.log(productcategory)

  
 

const relatedProducts = await db
  .select()
  .from(products)
  .where(
    and(
      eq(products.category, product.category),
      ne(products.id, product.id)
    )
  )
  .limit(4)

    


 console.log(product)


  return (
    <div className=" relative flex flex-col min-w-screen min-h-screen">
      
      <div className="flex flex-col sm:h-screen w-full">
        <div className=" w-full h-full sm:w-[70%] flex items-center justify-center bg-gray-100">
          <ImageCarousel image={product.images}/>
        </div>

        <div className=" sm:absolute right-1 md:h-screen bg-gray-100  sm:w-[30%]  p-6 flex items-center">
          <Info product = {product} />
        </div>
      </div>

          
           <div className='flex  flex-col sm:flex-row w-full max-w-screen md:min-h-screen items-center justify-center space-x-4'>

            <div className='w-[300px] hidden sm:block rounded-xl bg-black h-96'>

               <img className='w-full h-full rounded-2xl ' src="https://static.vecteezy.com/system/resources/previews/013/000/613/large_2x/high-resolution-with-details-and-quality-shot-of-formal-black-or-dark-grey-wool-suit-fabric-texture-with-decoration-under-light-and-shadow-ambient-ideal-for-background-or-wallpaper-free-photo.jpg" alt="" />

            </div>
              
               <div className=' w-[300px] h-[300px] sm:w-[400px] rounded-2xl  sm:h-[430px]'>
                  
                       <OgCarousel/>

                
            </div>

             <div className='w-xs hidden sm:block rounded-4xl  h-96'>
             <Question/>
            </div>

          </div>


          <div className=' w-full'>
        <Comments/>
          </div>
          


          
            <div className='flex mt-20 w-full items-center justify-center flex-col '>
              <div className='w-full mb-4  flex items-center justify-center'>
                <h4 className='text-xl font-semibold text-gray-500'>Our Recommandations</h4>

              </div>

             

              <Products data={relatedProducts}/>


            </div>
   

    </div>
  )
}

export default page
