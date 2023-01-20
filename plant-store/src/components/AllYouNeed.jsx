import React from "react"
import AllNeed from "./AllNeed"

import allone from "../images/all1.jpg"
import alltwo from "../images/all2.jpg"
import allthree from "../images/all3.jpg"
import allfour from "../images/all4.jpg"


function AllYouNeed() {
  return (
    <div className="bg-stone-200 py-10">
        <p className="text-3xl font-philo text-center mt-4 mb-12">ALL YOU NEED</p>
        <div className="flex flex-wrap justify-center items-center">
            <AllNeed 
            count={"I"} 
            allimage={allone} 
            title={"healthy"} 
            desc={"Fresh and moist air is essential for healthy sleep and life.Take care of yourself."}
            />
            <AllNeed 
            count={"II"} 
            allimage={alltwo} 
            title={"stylishly"} 
            desc={"Plant as an elegant addition to your interior. Treat yourself or your loved ones with cute gift."}
            />
            <AllNeed 
            count={"III"} 
            allimage={allthree} 
            title={"especial"} 
            desc={"We have a large selection of plants for every taste and budget. Find your special plant."}
            />
        </div>
        <div className="relative mt-6 sm:h-[600px] overflow-hidden">
            <img src={allfour} alt="big wall all"/>
            <div className="absolute top-4 right-4 backdrop-blur-md border sm:w-[450px] w-[270px] border-gray-200 sm:px-6 px-4 sm:py-8 py-2 rounded-lg text-white">
                <p className="italic text-right sm:text-sm text-xs">" Only plants are able to catch, transform and store in reserve that without which there is no life. And only using the energy accumulated by plants, people can exist. "</p>
                <p className="text-right font-philo sm:text-md text-sm italic mt-2"> - Clifford Donald Simak</p>
            </div>
        </div>
    </div>
  );
}
export default AllYouNeed;
