import React from "react"

function Header({ headerBG, bag }) {
    return(
        <div className="overflow-hidden w-full sm:h-[840px] h-[690px]">
        <div className="w-full sm:h-[800px] h-[690px] relative">
            <img src={headerBG} alt="headerBG" className="absolute w-full sm:h-[840px] h-[690px] object-cover sm:object-center object-top " />
        </div>
        <div className="absolute top-0 text-gray-200 flex items-center justify-between w-full py-12 sm:px-24 px-8">
                <div className="text-3xl">
                    <p className="font-philo">FLEUR</p>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="text-md mr-12 sm:block hidden hover:scale-110 duration-200"><a href="/">BESTSELLER</a></li>
                        <li className="text-md mr-12 sm:block hidden hover:scale-110 duration-200"><a href="/">ABOUT</a></li>
                        <li className="text-md mr-12 sm:block hidden hover:scale-110 duration-200"><a href="/">COLLECTION</a></li>
                        <li className="text-md mr-12 sm:block hidden hover:scale-110 duration-200"><a href="/">GALLERY</a></li>
                        <li><a href="/"><img src={bag} alt="bag" className="w-11 invert opacity-80 hover:scale-110 duration-200"/></a></li>
                    </ul>
                </div>
        </div>
            <div className="absolute sm:40 top-40 sm:w-[700px] w-[280px] flex sm:items-center items-start sm:pt-32 sm:px-24 px-8">
                <div className="text-gray-200 inline-block ml-3 sm:ml-0">
                    <p className="font-philo sm:text-7xl text-4xl sm:pt-0 pt-4">PLANT COLLECTION</p>
                    <p className="text-gray-300 sm:w-80 w-60 sm:text-lg text-xs mt-8">Choose your special plant of delicate freshness to complement your interior.</p>
                    <div className="flex sm:flex-row flex-col justify-start mt-10">
                        <button className="px-7 sm:mr-8 sm:mb-0 mb-6 py-3 text-sm font-semibold bg-green-500 rounded hover:bg-green-600 shadow-lg">BUY NOW</button>
                        <button className="px-7 py-3 text-sm font-semibold border-2 border-gray-200 rounded backdrop-blur-md shadow-lg">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;