import React from "react";

function ButtonMore({name}) {
    return(
        <button className="px-9 py-4 rounded border-2 bg-white mb-6 hover:border-green-600 border-green-700 text-green-800 text-xs font-semibold">{name}</button>
    )
}
export default ButtonMore