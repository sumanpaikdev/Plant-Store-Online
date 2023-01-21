import React from "react"
import './App.css';

// images
import bag from "./images/bag.png"
import headerBG from "./images/header-background.jpg"
import github from "./images/social1.png"
import twitter from "./images/social2.png"
import gmail from "./images/social3.png"
import portfolio from "./images/social4.png"
import arrival from "./images/arrivals.jpg"
import theshop from "./images/the-shop.jpg"

//components
import Header from "./components/Header"
import BestPlant from './components/BestPlant';
import AllYouNeed from './components/AllYouNeed';
import OurCollection from "./components/OurCollection";
import TheShop from './components/TheShop';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header bag={bag} headerBG={headerBG}/>
      <BestPlant/>
      <AllYouNeed />
      <OurCollection/>
      <TheShop theshop={theshop}/>
      <NewArrivals pic={arrival}/>
      <Footer github={github} twitter={twitter} gmail={gmail} portfolio={portfolio}/>
    </div>
  );
}

export default App;
