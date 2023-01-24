import React, {useContext} from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Context } from "../Context";

function Header({ headerBG, bag }) {

   const {exploreStatusToggle} = useContext(Context)
   
    return(
        <div className="overflow-hidden w-full sm:h-[840px] h-[690px]">
        <div className="w-full sm:h-[800px] h-[690px] relative">
            <img src={headerBG} alt="headerBG" className="absolute w-full sm:h-[840px] h-[690px] object-cover sm:object-center object-top " />
        </div>
        <div className="absolute top-0 text-gray-100 flex items-center justify-between w-full sm:py-12 py-6 sm:px-24 px-8">
                <div className="text-3xl">
                    <a className="font-philo" href="/">FLEUR</a>
                </div>
                <div>
                    <ul className="flex items-center">
                        {/* <li className="text-md mr-12 md:block hidden hover:scale-110 duration-200"><AnchorLink href="/">ABOUT</AnchorLink></li> */}
                        <li className="text-md mr-12 md:block hidden hover:scale-110 duration-200"><AnchorLink href="#bestseller">BESTSELLER</AnchorLink></li>
                        <li className="text-md mr-12 md:block hidden hover:scale-110 duration-200"><AnchorLink href="#collection">COLLECTION</AnchorLink></li>
                        <li><button onClick={exploreStatusToggle}><img src={bag} alt="bag" className="w-11 invert hover:scale-110 duration-200"/></button></li>
                    </ul>
                </div>
        </div>
            <div className="absolute sm:40 top-40 sm:w-[700px] w-[280px] flex sm:items-center items-start sm:pt-32 sm:px-24 px-8 pt-20">
                <div className="text-gray-100 inline-block ml-3 sm:ml-0">
                    <p className="font-philo sm:text-7xl text-4xl sm:pt-0 pt-4">PLANT COLLECTION</p>
                    <p className="text-gray-100 sm:w-80 w-60 sm:text-lg text-xs mt-8">Choose your special plant of delicate freshness to complement your interior.</p>
                    <div className="flex sm:flex-row flex-col justify-start mt-10">
                        <button onClick={exploreStatusToggle} className="px-7 sm:mr-8 sm:mb-0 mb-6 py-3 text-sm font-semibold bg-green-600 rounded hover:bg-green-500 shadow-lg">Explore Shop</button>
                        {/* <a href="javascript:void(0)" className="px-7 py-3 text-sm font-semibold border-2 border-gray-200 rounded backdrop-blur-md shadow-lg">LEARN MORE</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;