import React from "react"

function Footer({ github, twitter, gmail, portfolio }) {
    return(
        <div className="uppercase bg-emerald-800 flex sm:flex-row flex-col justify-evenly items-start text-gray-100 text-sm py-12 sm:pl-0 pl-10">
            <div>
                <p className="text-2xl font-philo mb-6">FLEUR</p>
            </div>
            <div className="text-xs mb-6">
                <p className="mb-2">Futher Information</p>
                <p className="mb-2">Terms & Conditions</p>
                <p className="mb-2">Pricacy Policy</p>
            </div>
            <div className="text-xs mb-6">
                <p className="mb-2">bestsellers</p>
                <p className="mb-2">about</p>
            </div>
            <div className="text-xs mb-6">
                <p className="mb-2">collection</p>
                <p className="mb-2">gallery</p>
            </div>
            <div>
                <p className="text-xs mb-2">Follow us</p>
                <div className="flex">
                    <a href="/" className="mr-4"> <img src={github} alt="github" className="invert w-8 hover:scale-110 duration-200 shadow-md"/></a>
                    <a href="/" className="mr-4"> <img src={twitter} alt="twitter" className="invert w-8 hover:scale-110 duration-200 shadow-md"/></a>
                    <a href="/" className="mr-4"> <img src={gmail} alt="gmail" className="invert w-8 hover:scale-110 duration-200 shadow-md"/></a>
                    <a href="/" className="mr-4"> <img src={portfolio} alt="portweb" className="invert w-8 hover:scale-110 duration-200 shadow-md"/></a>
                </div>
            </div>
        </div>
    )
}
export default Footer;