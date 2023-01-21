import React from "react";

function Button({name}) {
    return(
        <button className="px-9 py-4 rounded shadow-md hover:bg-green-500 bg-green-600 text-gray-200 text-xs font-semibold mb-6">{name}</button>
    )
}
export default Button