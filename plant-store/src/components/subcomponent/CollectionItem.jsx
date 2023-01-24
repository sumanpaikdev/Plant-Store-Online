import React, {useContext} from 'react'
import { Context } from '../../Context';


function CollectionItem({items}) {
  const {addToCart} = useContext(Context)

  return (
    <div className='w-[270px] h-[400px] border shadow-md m-3 flex-none cursor-pointer snap-center relative'>
      <img src={items.urls.small} className='w-[270px] h-[300px]' alt='plant'/>
      <p className='text-sm mt-4 ml-4'>{items.alt_description}</p>
      <p className='text-2xl mt-2 ml-4'>${items.likes}.00</p>
      <button onClick={() => addToCart(items)} className='w-[100] h-[80] bg-green-700 text-xs text-white py-2 px-4 flex justify-center items-center hover:bg-green-600 rounded-sm shadow absolute bottom-3 right-3 border-none'>Add to cart</button>
    </div>
  )
}
export default CollectionItem