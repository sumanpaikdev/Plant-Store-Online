import React from "react";

function Button({name}) {
    return(
        <button className="px-9 py-4 rounded shadow-md hover:bg-emerald-500 bg-emerald-600 text-gray-200 text-xs font-semibold">{name}</button>
    )
}
export default Button