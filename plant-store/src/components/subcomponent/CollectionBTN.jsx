import React, {useContext} from 'react'
import {Context} from "../../Context"

function CollectionBTN({name}) {
  const {querySearch, searchItem} = useContext(Context)

  
  console.log(querySearch)
  return (
   <button className='px-4 py-2 whitespace-nowrap m-[4px] h-[40px] text-green-800 text-sm font-semibold border border-green-800 hover:bg-green-600 hover:text-white hover:border-white duration-150' onClick={() => searchItem(name)}>{name}</button>
  )
}
export default CollectionBTN; 