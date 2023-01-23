import React, { useContext } from 'react'
import { Context } from '../Context'
import InCartItem from "./subcomponent/InCartItem"

export default function CartPage() {
    const {cartPlant} = useContext(Context)
    const yourPlant = cartPlant.map(items => {
        return(
            <InCartItem items={items}/>
        )
    })
  return (
    <div className='pt-27'>
        <div className='flex flex-wrap justify-center items-center'>
           {yourPlant}
        </div>
    </div>
  )
}
