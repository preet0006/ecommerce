import Filter from '@/components/Filter';
import Products from '@/components/Products';
import ShoppingBag from '@/components/Shop';
import { db } from '@/db';
import { products } from '@/db/schema';
import { types } from '@/lib';
import { eq, sql } from 'drizzle-orm';


const Page =  async({params}) => {

 const { category } = await params

  const decodedCategory = decodeURIComponent(category)

  console.log(decodedCategory)  
  
  

  
const product = await db
  .select()
  .from(products)
  .where(
    sql`${products.category} ILIKE ${'%' + decodedCategory + '%'}`
  )


     
  

  return (

   
    <div className='flex flex-col mt-6 flex-1 sm:p-2 space-y-6'>

         <div className='hidden sm:flex'>
        <Filter/>
       </div>
      <h4 className='text-xl  mt-12  pl-4 font-semibold'>Header</h4>
      <p className='text-xs text-center sm:hidden px-6 text-gray-600 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, eum.</p>
      <p className='text-gray-600 hidden sm:block'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique numquam ut dicta consequatur exercitationem id expedita asperiores pariatur officia natus doloremque voluptate perspiciatis dolores praesentium, minus quo recusandae cumque.
      </p>


      <div className="w-full flex items-center justify-evenly gap-2 px-3 py-2 
                bg-[#F5F5F5] rounded-xl
                md:hidden">

  
  <button className="flex items-center gap-1 px-3 py-1.5
                     bg-white rounded-lg shadow-sm
                     text-xs font-medium
                     hover:bg-gray-100 transition">
    <Filter/>
  </button>

  {/* Price Dropdown */}
  <select
    className="px-3 py-1.5 rounded-lg shadow-sm
               bg-white text-xs font-medium
               outline-none cursor-pointer
               hover:bg-gray-100 transition"
  >
    <option value="">Price</option>
    <option value="low">Under ₹500</option>
    <option value="mid">₹500–₹1000</option>
    <option value="high">Above ₹1000</option>
  </select>

</div>



            
       <Products data={product}/>
       


    </div>



  
  );
};

export default Page;
