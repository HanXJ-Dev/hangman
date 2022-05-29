import React from 'react'
import { PacmanLoader } from 'react-spinners'
import "./index.css";

const style = {
  "color": "#69C9D0",
};

export default function Preloader() {
  return (
    <div className="loader">
      <PacmanLoader color={style.color}/>
    </div>
  )
}
