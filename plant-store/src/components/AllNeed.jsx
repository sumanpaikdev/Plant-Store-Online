import React from "react";

function AllNeed({ count, allimage, title, desc}) {
    return(
        <div className="w-[310px] h-[480px] shadow-md bg-white sm:mx-2 relative mb-4 sm:hover:-translate-y-6 duration-500">
          <div>
            <img src={allimage} alt="all need one" className="w-[310px] h-[310px]"/>
            <div className="absolute top-72 left-[38%] p-4 w-16 h-16 rounded-full backdrop-blur-lg shadow-md flex items-center justify-center bg-lime-200">
                <p className="font-sans font-bold text-lg text-gray-700">{count}</p>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-center items-center">
            <p className="mt-8 mb-2 font-philo text-xl uppercase">{title}</p>
            <p className="text-center px-4 text-gray-600 text-sm">{desc}</p>
          </div>
        </div>
    )
}
export default AllNeed;