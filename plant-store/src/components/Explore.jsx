import React, { useContext } from "react";
import ShopContainer from "./ShopContainer";
import CartPage from "./CartPage";
import { Context } from "../Context";

import back from "../images/back.png"

function Explore() {
  const [ cartstat, setCartstat] = React.useState(true)
  const {cartPlant, exploreStatusToggle} = useContext(Context)
  function toggleState() {
    if(cartstat){
      setCartstat(false)
    }else{
      setCartstat(true)
    }
  }
  return (
    <div>
      <div className="flex justify-between items-center pl-7 pr-10 py-3 fixed w-[100%] top-0 z-10 bg-white shadow-md">
        <button onClick={exploreStatusToggle} className="font-philo text-2xl"><img className="w-[40px] rounded-full hover:ring-emerald-500 hover:ring-2 p-2" src={back} alt="leftback" /></button>
        
        <button onClick={toggleState} className="flex justify-center items-center shadow-sm text-lg font-philo text-white hover:bg-green-600 bg-green-700 rounded-md pl-3 pr-5 py-2">
          {cartstat ? "Cart" : "Back to shop"}
          </button>
        {cartstat && <p className="text-white backdrop-blur-xl rounded-full px-[7px] py-[3px] font-semibold absolute right-5 top-2 shadow bg-rose-500">{cartPlant.length}</p>}
      </div>
      {cartstat && <ShopContainer/> }
      {cartstat === false && <CartPage/> }
      
    </div>
  );
}
export default Explore;
