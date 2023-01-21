import React from "react";

function TheShop({ theshop }) {
    return(
        <div className="p-8 flex justify-center items-center bg-stone-100">
            <div className="shadow flex bg-white justify-between sm:flex-row flex-col sm:w-[800px] md:w-[1000px]">
                    <img src={theshop} alt="the shop" className="sm:w-[400px] sm:h-[400px] w-[310px] h-[310px] object-cover"/>
                <div className="flex flex-col justify-center items-center w-full sm:h-[400px] h-[310px] overflow-hidden pb-4">
                    <p className="font-philo text-2xl sm:my-6 my-6">THE SHOP</p>
                    <p className="sm:w-[280px] w-[250px] text-xs text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore maxime quam sequi ipsam architecto tempora at earum voluptatem ipsum, repudiandae dolorum modi mollitia blanditiis, explicabo accusamus vel adipisci autem ducimus. Commodi quaerat, non, saepe quis nobis accusamus voluptatem cum soluta vero repellendus laborum ea et sed vitae rem impedit esse a nemo, fugit nam quas. Inventore quo exercitationem velit, quia culpa sint.</p>
                </div>
            </div>
        </div>
    )
}
export default TheShop