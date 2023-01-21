import React from "react";
import humi from "../images/humi.png"
import sunny from "../images/sunny.png"
import temp from "../images/temp.png"
import calendar from "../images/calendar.png"

function Weather({tem, day}) {
    return(
        <div className="flex justify-center items-center sm:scale-100 scale-75 w-[315px] mb-6">
            <div className=" w-24 h-24 flex flex-col justify-center items-center border-l-2 border-gray-100 p-3">
                <img src={humi} alt="humidity" className="w-10 opacity-50 mb-2"/>
                <p className="text-sm">Humidity</p>
            </div>
            <div className=" w-24 h-24 flex flex-col justify-center items-center border-l-2 border-gray-100 p-3">
                <img src={sunny} alt="sunny weather" className="w-10 opacity-50 mb-2"/>
                <p className="text-sm">Penumbra</p>
            </div>
            <div className=" w-24 h-24 flex flex-col justify-center items-center border-l-2 border-gray-100 p-3">
                <img src={temp} alt="temperature" className="w-10 opacity-50 mb-2"/>
                <p className="text-sm">{tem}</p>
            </div>
            <div className="w-24 h-24 flex flex-col justify-center items-center border-l-2 border-r-2 border-gray-100 p-3">
                <img src={calendar} alt="calendar" className="w-10 opacity-50 mb-2"/>
                <p className="text-sm">{day}</p>
            </div>
        </div>
    )
}
export default Weather