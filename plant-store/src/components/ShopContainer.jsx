import React, {useContext} from 'react'
import {Context} from '../Context'

import Collection from "./subcomponent/CollectionBTN"
import ExploreItem from "./subcomponent/ExploreItem"
import ButtonMore from './subcomponent/ButtonMore'

export default function ShopContainer() {
    const {allPhotos} = useContext(Context)

    const imageElement = allPhotos.map(items => (
      <ExploreItem items={items} key={items.id}/>
    ))
  return (
    <div className='py-6 sm:pl-0 pl-2 bg-gray-100 relative pt-28'>
      <div className=' flex overflow-x-auto sm:justify-center no-scrollbar'>
        <Collection name={"Green plants"}/>
        <Collection name={"Ficus lyrata"} />
        <Collection name={"Philodendron"} />
        <Collection name={"Hanging Plant"} />
        <Collection name={"Monstera"} />
        <Collection name={"Succulents "} />
        <Collection name={"Fern"} />
      </div>
      <div className='pt-8 flex flex-wrap items-center justify-center'>
        {imageElement}
      </div>
      <div className='pt-6 flex flex-col items-center'>
        <ButtonMore name={"Back to home"}/>
      </div>
      
    </div>
  )
}
