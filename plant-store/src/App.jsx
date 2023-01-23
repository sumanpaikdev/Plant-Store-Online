import React, {useContext} from "react"
import './App.css';
import { Context } from "./Context";

import Explore from "./components/Explore";

// images
import bag from "./images/bag.png"
import headerBG from "./images/header-background.jpg"
import github from "./images/social1.png"
import twitter from "./images/social2.png"
import gmail from "./images/social3.png"
import portfolio from "./images/social4.png"
import arrival from "./images/arrivals.jpg"

//components
import Header from "./components/Header"
import BestPlant from './components/BestPlant';
import AllYouNeed from './components/AllYouNeed';
import OurCollection from "./components/OurCollection";
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';

function App() {

  const {exploreStatus} = useContext(Context)


    return (
      <div className="App">
        { exploreStatus && <Header bag={bag} headerBG={headerBG}/>}
        { exploreStatus && <BestPlant/>}
        { exploreStatus && <AllYouNeed />}
        { exploreStatus && <OurCollection/>}
        { exploreStatus && <NewArrivals pic={arrival}/>}
        { exploreStatus && <Footer github={github} twitter={twitter} gmail={gmail} portfolio={portfolio}/>}
        { exploreStatus === false && <Explore cartlogo={bag}/>}
      </div>
    );

}

export default App;



// <TheShop theshop={theshop}/>
// import TheShop from './components/TheShop';
// import theshop from "./images/the-shop.jpg"

