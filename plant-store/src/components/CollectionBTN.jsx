import React from 'react'

export default function CollectionBTN({name}) {
  return (
   <button className='px-6 py-2 m-[4px] h-[40px] text-green-800 text-sm font-semibold border border-green-800 hover:bg-green-600 hover:text-white hover:border-white duration-150'>{name}</button>
  )
}
