import React, {useContext} from 'react'
import Collection from "./subcomponent/CollectionBTN"
import CollectionItem from './subcomponent/CollectionItem'
import ButtonMore from './subcomponent/ButtonMore'

import {Context} from '../Context'

function OurCollection() {

  const {allPhotos} = useContext(Context)

  const imageElement = allPhotos.map(items => (
    <CollectionItem items={items} key={items.id}/>
  ))
 
  return (
    <div className='py-6 sm:pl-0 pl-2 bg-gray-100' id="collection">
      <p className='font-philo text-3xl text-center mb-6'>OUR COLLECTION</p>
      <div className=' flex overflow-x-auto sm:justify-center no-scrollbar'>
        <Collection name={"Green plants"}/>
        <Collection name={"Ficus lyrata"} />
        <Collection name={"Philodendron"} />
        <Collection name={"Hanging Plant"} />
        <Collection name={"Monstera"} />
        <Collection name={"Succulents "} />
        <Collection name={"Fern"} />
      </div>
      <div className='pt-8 sm:pl-8 flex no-scrollbar overflow-x-auto snap-x'>
        {imageElement}
      </div>
      <div className='pt-6 flex flex-col items-center'>
        <ButtonMore name={"SEE MORE"}/>
      </div>
    </div>
  )
}
export default OurCollection