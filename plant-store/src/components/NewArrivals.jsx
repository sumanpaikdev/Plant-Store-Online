import React from "react";

function NewArrivals({ pic }) {
    return(
        <div className="p-8 flex justify-center items-center bg-gray-100">
            <div className="flex sm:flex-row flex-col justify-between shadow sm:w-[800px] md:w-[1000px] bg-white overflow-hidden">
                <img src={pic} alt="arrival" className="sm:w-[400px] sm:h-[400px] w-[310px] h-[310px]"/>
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="uppercase font-philo text-2xl mb-4 mt-6">new arrivals</p>
                    <p className="w-[210px] text-center mb-10 text-xs text-gray-500">Please, leave your email to be updated on our new arrivals and discounts.</p>
                    <input type="text" placeholder="example@gmail.com" className="shadow rounded border-2 border-gray-300 text-md focus:outline-none px-4 py-2 focus:ring ring-green-600"/>
                    <button className="shadow-md bg-emerald-600 hover:bg-emerald-500 px-8 py-3 rounded text-xs font-semibold text-gray-100 mt-4 mb-6">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default NewArrivals