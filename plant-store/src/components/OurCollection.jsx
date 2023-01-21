import React, {useContext} from 'react'
import Collection from "./CollectionBTN"
import CollectionItem from './CollectionItem'

import {Context} from '../Context'

function OurCollection() {

  const {allPhotos} = useContext(Context)

  const imageElement = allPhotos.map(items => (
    <CollectionItem items={items} key={items.id}/>
  ))
 
  return (
    <div className='py-6 sm:pl-0 pl-2 bg-gray-100'>
      <p className='font-philo text-3xl text-center mb-6'>OUR COLLECTION</p>
      <div className=' flex overflow-x-auto sm:justify-center no-scrollbar'>
        <Collection name={"All"}/>
        <Collection name={"Hanging"} />
        <Collection name={"PalmTrees"} />
        <Collection name={"Philodendrons"} />
        <Collection name={"Ferns"} />
        <Collection name={"Calathea"} />
        <Collection name={"Strelitzia"} />
      </div>
      <div className='pt-8 sm:pl-8 flex no-scrollbar overflow-x-auto snap-x'>
        {imageElement}
      </div>
    </div>
  )
}
export default OurCollection