import './App.css';
import React from "react"
import AllYouNeed from './components/AllYouNeed';

// images
import bag from "./images/bag.png"
import headerBG from "./images/header-background.jpg"

//components
import Header from "./components/Header"
import Bestseller from './components/Bestseller';

function App() {
  return (
    <div className="App">
      <Header bag={bag} headerBG={headerBG}/>
      <Bestseller/>
      <AllYouNeed/>
    </div>
  );
}

export default App;
