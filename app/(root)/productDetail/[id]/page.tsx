export const revalidate = 300;

import type { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  const [product] = await db
    .select()
    .from(products)
    .where(eq(products.id, id));

  if (!product) {
    return {
      title: "Product not found | E-Com Store",
      description: "The requested product was not found.",
      alternates: {
        canonical: "/productDetail",
      },
    };
  }

  const title = `${product.name} - Premium ${product.category} from ${product.brand || 'E-Com'} | E-Com Store`;
  const description = `Discover the ${product.name}, a premium ${product.category} from ${product.brand || 'our collection'}. Featuring ${product.fit || 'comfortable'} fit with fast shipping, easy returns, and excellent customer service. Shop now at E-Com Store for the best deals.`;

  return {
    title: title.length > 60 ? `${product.name} | E-Com Store` : title,
    description: description.length > 160 ? `Buy ${product.name} from our ${product.category} collection with fast shipping and easy returns.` : description,
    alternates: {
      canonical: `/productDetail/${id}`,
    },
    openGraph: {
      title: `${product.name} | E-Com Store`,
      description: `Buy ${product.name} from our ${product.category} collection with fast shipping and easy returns.`,
      images: [
        {
          url: product.images?.[0] || "/image.webp",
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | E-Com Store`,
      description: `Buy ${product.name} from our ${product.category} collection with fast shipping and easy returns.`,
      images: [product.images?.[0] || "/image.webp"],
    },
  };
}

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

    


 


  return (
    <div className=" relative flex flex-col min-w-screen min-h-screen">
      
      <div className="flex flex-col sm:h-screen w-full">
        <div className=" w-full h-full sm:w-[70%] flex items-center justify-center bg-gray-100">
          <ImageCarousel image={product.images?.[0] || '/placeholder.jpg'} alt={product.name}/>
        </div>

        <div className=" sm:absolute right-1 md:h-screen bg-gray-100  sm:w-[30%]  p-6 flex items-center">
          <Info product = {product} />
        </div>

        <div className="sm:absolute right-1 sm:top-[100vh] w-full sm:w-[30%] p-6 bg-gray-100">
          <h2 className="text-lg font-semibold mb-4">Product Details</h2>
          <p className="text-sm mb-2"><strong>Description:</strong> {product.description}</p>
          <p className="text-sm mb-2"><strong>Brand:</strong> {product.brand}</p>
          <p className="text-sm mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-sm mb-2"><strong>Fit:</strong> {product.fit}</p>
          <p className="text-sm mb-2"><strong>Available Sizes:</strong> {product.sizes?.join(', ') || 'M, L, XL'}</p>
          <p className="text-sm mb-2"><strong>Rating:</strong> {product.rating}/5 ({product.totalReviews} reviews)</p>
          <p className="text-sm">This product is part of our premium collection, designed for comfort and style. We offer fast shipping across the country and a hassle-free return policy. If you have any questions, feel free to contact our customer service team.</p>
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
