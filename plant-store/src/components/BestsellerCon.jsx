import React from "react";
import Button from "./Button"
import Weather from "./Weather"

function BestsellerCon({pic, title, desc, tem, day}) {
    return(
        <div className="pb-6 flex justify-center items-center overflow-hidden">
            <div className="flex sm:flex-row flex-col justify-between sm:w-[800px] sm:shadow-none shadow bg-white sm:hover:translate-x-4 duration-500">
                <img src={pic} alt="arrival" className="sm:w-[400px] sm:h-[400px] w-full h-[310px]"/>
                <div className="flex flex-col justify-center items-center sm:w-[400px]">
                    <p className="uppercase font-philo text-2xl mb-4 mt-6">{title}</p>
                    <p className="w-[210px] text-center mb-10 text-xs text-gray-500">{desc}</p>
                    <Weather tem={tem} day={day}/>
                    <Button name={"ADD TO CART"}/>
                </div>
            </div>
            
        </div>
    )
}
export default BestsellerCon