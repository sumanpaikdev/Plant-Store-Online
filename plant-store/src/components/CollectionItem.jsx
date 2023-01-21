import React from 'react'

function CollectionItem() {
  return (
    <div className='w-[270px] h-[390px] border shadow-md m-3 flex-none cursor-pointer snap-center'>
      <img src="https://images.unsplash.com/photo-1467241850596-6a0de48568da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='w-[270px] h-[300px]' alt='plant'/>
      <p className='text-sm mt-4 ml-4'>Put the item title</p>
      <p className='text-2xl mt-2 ml-4'>$98.00</p>
    </div>
  )
}
export default CollectionItem