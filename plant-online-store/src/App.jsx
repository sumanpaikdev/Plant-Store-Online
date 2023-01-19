import './App.css';
import React from "react"

// images
import bag from "./images/bag.png"
import headerBG from "./images/header-bg.png"

//components
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header bag={bag} headerBG={headerBG}/>
    </div>
  );
}

export default App;
