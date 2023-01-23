import React, {useContext} from "react";
import { Context } from "../../Context";

function ButtonMore({name}) {
    const {exploreStatusToggle} = useContext(Context)
    return(
        <button onClick={exploreStatusToggle} className="px-2 h-[45px] w-[130px] rounded border-2 bg-white mb-6 hover:border-green-600 border-green-700 text-green-800 hover:scale-105 duration-200 text-xs font-semibold uppercase">{name} &rarr;</button>
    )
}
export default ButtonMore