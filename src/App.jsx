import React from "react";
import List from "./components/List"
import Navbar from "./components/Navbar";
import './index.css'

function App() {

  return (
    <>
  <Navbar />
  <div className="header">
    <h2>People</h2>
  <List />
  </div>
    </>
  )
}

export default App
