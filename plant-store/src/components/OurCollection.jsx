import React from 'react'
import Collection from "./CollectionBTN"
import CollectionItem from './CollectionItem'

function OurCollection() {
  return (
    <div className='py-6 sm:pl-0 pl-2 bg-gray-100'>
      <p className='font-philo text-3xl text-center mb-6'>OUR COLLECTION</p>
      <div className=' flex overflow-x-auto sm:justify-center no-scrollbar'>
        <Collection name={"All"} />
        <Collection name={"Hanging"} />
        <Collection name={"PalmTrees"} />
        <Collection name={"Philodendrons"} />
        <Collection name={"Ferns"} />
        <Collection name={"Calathea"} />
        <Collection name={"Strelitzia"} />
      </div>
      <div className='pt-8 sm:pl-8 flex no-scrollbar overflow-x-auto snap-x'>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
      </div>
    </div>
  )
}
export default OurCollection