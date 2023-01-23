import React, { useContext } from 'react'
import { Context } from '../../Context';

function CollectionItem({items}) {
  const {addToCart} = useContext(Context)
  return (
    <div className='bg-white sm:w-[270px] w-[132px] sm:h-[400px] h-[240px] border shadow-md sm:m-3 m-2 flex-none cursor-pointer snap-center relative hover:shadow-lg duration-200'>
      <img src={items.urls.small} className='sm:w-[270px] w-[132px] sm:h-[300px] h-[120px]' alt='plant'/>
      <p className='text-xs sm:text-sm sm:mt-4 mt-2 sm:ml-4 ml-2'>{items.alt_description}</p>
      <p className='sm:text-2xl text-lg sm:mt-2 sm:ml-4 ml-2'>${items.likes}.00</p>
      <button onClick={() => addToCart(items)} className='w-[100] h-[80] bg-green-700 text-xs text-white rounded-tr-full py-2 px-4 flex justify-center items-center hover:bg-green-600 sm:rounded-sm shadow absolute sm:bottom-3 sm:right-3 bottom-0 border-none active:opacity-75'>Add to cart</button>
    </div>
  )
}
export default CollectionItem;