import React, { useState } from "react";

export default function Sprite({ data, image}) {
  const { y, x, h, w } = data;
  // const image = characterState.spriteImage
  return (
  <div
    style={{
      display: "inline-block",
      height: `${h}px`,
      width: `${w}px`,
      backgroundImage: "url(https://i.ibb.co/yg3Vrjg/ge-spritesheet.png)",
      backgroundRepeat: "no-repeat",
      // this is negative to show from top down, where the image is in a 64x64 grid
      backgroundPosition: `-${x}px -${y}px`

    }}
  />
  )
}

