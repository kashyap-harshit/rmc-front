// import React, { useContext, useEffect, useState } from 'react'
// import {useParams} from 'react-router-dom';
// import {ShopContext} from '../context/ShopContext';
// import { assets } from '../assets/assets';

// const Product = () => {
//     const {productId }= useParams();
//     const {products,currency } = useContext(ShopContext);
//     const [ProductData,setProductData] = useState(false);
//     const [image,setImage] = useState('')

//     const fetchProductData = async () =>{
//       products.map((item)=>{
//         if(item._id === productId){
//           setProductData(item)
//           setImage(item.image[0])
//           console.log(item);
//           return null;
//         }
//     })
//     }
    
//     useEffect(() => {
//       fetchProductData();
    
     
//     }, [productId,products])
    

//   return ProductData ? (
    

//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
    
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      
      
//       <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//         <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//           {
//             ProductData.image.map((item,index)=>(
//               <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'  alt="" />
//             ))
//           }
//         </div>
//         <div className='w-full sm:w-[80%]'>
//           <img className='w-full h-auto' src = {image} alt="" />
//         </div>
//       </div>
       
//           <div className='flex-1'> 
//             <h1 className='font-medium text-2xl mt-2'>{ProductData.name}</h1>
//             <div className='flex items-center gap-1 mt-2'>
//             <img src={assets.star_icon} alt="" className='w-3 5'/>
//             <img src={assets.star_icon} alt="" className='w-3 5' />
//             <img src={assets.star_icon} alt="" className='w-3 5' />
//             <img src={assets.star_icon} alt="" className='w-3 5' />
//             <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
//             <p className='pl-2'>(122)</p>
//             </div>
//             <p className=' mt-5 text-3xl font-medium'>{currency}{ProductData.price}</p>
//           </div>
//           <p className='mt-5 text-gray-500 md:w-4/5'> {ProductData.description}</p>
//       </div>
//     </div>

    
//   ) : <div className='opacity-0'></div>
// }

// export default Product

import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import {ShopContext} from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
    const {productId }= useParams();
    const {products,currency,addToCart } = useContext(ShopContext);
    const [ProductData,setProductData] = useState(false);
    const [image,setImage] = useState('');
    const [size,setSize] = useState('');

    const fetchProductData = async () =>{
      products.map((item)=>{
        if(item._id === productId){
          setProductData(item)
          setImage(item.image[0])
          console.log(item);
          return null;
        }
    })
    }
    
    useEffect(() => {
      fetchProductData();
    
     
    }, [productId,products])
    

  return ProductData ? (
    <div className='px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]'>
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
    
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      
      
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {
            ProductData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'  alt="" />
            ))
          }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src = {image} alt="" />
        </div>
      </div>
       <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{ProductData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
          <img src={assets.star_icon} alt="" className='w-3 5'/>
           <img src={assets.star_icon} alt="" className='w-3 5' />
             <img src={assets.star_icon} alt="" className='w-3 5' />
             <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
             <p className='pl-2'>(122)</p>
        </div>
        <p className=' mt-5 text-3xl font-medium'>{currency}{ProductData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'> {ProductData.description}</p>
       <div className='flex flex-col gap-4 my-8 '>
        <p>Select Size</p>
          <div className='flex gap-2'>
            {ProductData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-3 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : '' }`} key={index}>{item}</button>
              ))
            }
          </div>

       </div>
       <button onClick={()=>addToCart(ProductData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded-lg'>ADD TO CART</button>
       <hr  className='mt-8 sm:w-4/5'/>
       <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
        <p>100% Original quality</p>
        <p>Cash on delivery</p>
        <p>Easy Return policy and replace</p>
       </div>
       </div>
       
         
          
      </div>
    </div>
              {/* review section */}
    
    <div className='mt-20'>
      <div className='flex'>
      <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
      </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus quibusdam mollitia</p>
            <p> corrupti praesentium error, tenetur, nulla libero, minima ipsum commodi iusto optio ab.</p>
            </div>
    </div>
    <RelatedProduct category={ProductData.category} subcategory={ProductData.subcategory}/>
    
    </div>

  ) : <div className='opacity-0'></div>
}

export default Product