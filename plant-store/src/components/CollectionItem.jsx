import React from 'react'

function CollectionItem({items}) {
  return (
    <div className='w-[270px] h-[390px] border shadow-md m-3 flex-none cursor-pointer snap-center'>
      <img src={items.urls.small} className='w-[270px] h-[300px]' alt='plant'/>
      <p className='text-sm mt-4 ml-4'>Put the item title</p>
      <p className='text-2xl mt-2 ml-4'>$98.00</p>
    </div>
  )
}
export default CollectionItem