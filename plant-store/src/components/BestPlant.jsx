import React from "react";

import bestone from "../images/best1.jpg";
import besttwo from "../images/best2.jpg";
import bestthree from "../images/best3.jpg";

import ButtonMore from "./ButtonMore";
import BestsellerCon from "./BestsellerCon";

function BestPlant() {
  return (
    <div className="bg-stone-200 sm:bg-white flex flex-col items-center overflow-hidden">
        <p className="font-philo text-3xl my-12">BESTSELLERS</p>
      <BestsellerCon
        pic={bestone}
        title={"helleborus"}
        desc={"A delicate spring flower will give tenderness to your home."}
        tem={"15-29 Deg"}
        day={"5 Days"}
      />
      <BestsellerCon
        pic={besttwo}
        title={"helleborus"}
        desc={"A delicate spring flower will give tenderness to your home."}
        tem={"15-29 Deg"}
        day={"5 Days"}
      />
      <BestsellerCon
        pic={bestthree}
        title={"helleborus"}
        desc={"A delicate spring flower will give tenderness to your home."}
        tem={"15-29 Deg"}
        day={"5 Days"}
      />
      <ButtonMore name={"SEE MORE"} />
    </div>
  );
}
export default BestPlant;
