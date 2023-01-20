import React from "react";
import Button from "./Button"
import ButtonMore from "./ButtonMore";
import Weather from "./Weather"

import bestone from "../images/best1.jpg"
import besttwo from "../images/best2.jpg"
import bestthree from "../images/best3.jpg"

function Bestseller() {
    return(
        <div className="flex flex-col justify-center items-center w-full sm:pt-12 pt-2 pb-10 bg-gray-100">
            <p className="font-philo text-3xl sm:my-12 my-8">BESTSELLERS</p>

            <div className="shadow flex sm:flex-row flex-col justify-between mb-4 sm:w-2/3 w-[310px] bg-white">
                <div className="flex items-center justify-start">
                    <img src={bestone} alt="pic one" className="sm:w-[480px] w-[310px] sm:h-[480px] h-[300px]"/>
                </div>
                <div className="flex flex-col justify-center items-center sm:px-16">
                    <p className="uppercase sm:text-2xl sm:mt-0 mt-4 text-xl font-philo pb-2 border-b-2 border-gray-600">helleborus</p>
                    <p className="mt-8 w-56 text-center">A delicate spring flower will give tenderness to your home.</p>
                    <div className="py-6">
                        <Weather tem={"15-29 Deg"} day={"5 Days"}/>
                    </div>
                    <div className="sm:mb-0 mb-5">
                        <Button name={"ADD TO CART"}/>
                    </div>
                </div>
            </div>
            <div className="shadow flex sm:flex-row flex-col justify-between mb-4 sm:w-2/3 w-[310px] bg-white">
                <div className="flex items-center justify-start">
                    <img src={besttwo} alt="pic two" className="sm:w-[480px] w-[310px] sm:h-[480px] h-[300px]"/>
                </div>
                <div className="flex flex-col justify-center items-center sm:px-16">
                    <p className="uppercase sm:text-2xl sm:mt-0 mt-4 text-xl font-philo pb-2 border-b-2 border-gray-600">aichryson</p>
                    <p className="mt-8 w-56 text-center">The natural shape of this plant add naturalness to your space.</p>
                    <div className="py-6">
                        <Weather tem={"25-20 Deg"} day={"9 Days"}/>
                    </div>
                    <div className="sm:mb-0 mb-5">
                        <Button name={"ADD TO CART"}/>
                    </div>
                </div>
            </div>
            <div className="shadow flex sm:flex-row flex-col justify-between mb-4 sm:w-2/3 w-[310px] bg-white">
                <div className="flex items-center justify-start">
                    <img src={bestthree} alt="pic three" className="sm:w-[480px] w-[310px] sm:h-[480px] h-[300px]"/>
                </div>
                <div className="flex flex-col justify-center items-center sm:px-16">
                    <p className="uppercase sm:text-2xl sm:mt-0 mt-4 text-xl font-philo pb-2 border-b-2 border-gray-600">callisia</p>
                    <p className="mt-8 w-56 text-center">Ampel plants will make any interior green wild jungle.</p>
                    <div className="py-6">
                        <Weather tem={"18-24 Deg"} day={"4-5 Days"}/>
                    </div>
                    <div className="sm:mb-0 mb-5">
                        <Button name={"ADD TO CART"}/>
                    </div>
                </div>
            </div>
            <div>
                <ButtonMore name={"SEE MORE"}/>
            </div>
        </div>
    )
}
export default Bestseller;