import React from "react";
import Sprite from "./components/sprite";
import Actor from "./components/actor";
import Player from "./components/player";
import './App.css';

export default function App() {
  const data = {
    y: -768,
    x:0,
    h: 64,
    w: 64,
  }
    //Pass a function that calls setCharacterState
  
    return (
     <div className="zone-container">
      <Player
      sprite={"url(https://i.ibb.co/yg3Vrjg/ge-spritesheet.png)"}
      data ={data}
      />
      </div>
      );
}
