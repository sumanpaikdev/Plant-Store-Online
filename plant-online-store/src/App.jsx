import './App.css';
import React from "react"

// images
import bag from "./images/bag.png"
import headerBG from "./images/header-bg.png"

//components
import Header from "./components/Header"
import Bestseller from './components/Bestseller';

function App() {
  return (
    <div className="App">
      <Header bag={bag} headerBG={headerBG}/>
      <Bestseller/>
    </div>
  );
}

export default App;
