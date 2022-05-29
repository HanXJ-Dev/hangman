import React from "react"
import "./index.css"
import "animate.css"

{
  /* Credits: SVG and CSS adapted from https://github.com/AkshatM/Hangman */
}
export default function Hangman(props) {
  const { lives } = props
  return (
    <>
      <div className="svg-container animate__animated animate__rotateInDownLeft">
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMinYMin meet"
          className="svg"
        >
          <rect fill="#053544" width="10" height="400" x="20" y="0" />
          <rect fill="#053544" width="150" height="10" x="20" y="0" />
          <rect fill="#053544" width="200" height="10" x="0" y="400" />
          <line x1="140" y1="0" x2="140" y2="120" stroke="rgb(0,0,0)" />
          {lives < 6 ? <circle className="animate__animated animate__bounceInDown" cx="140" cy="150" r="30" /> : ""}
          {lives < 5 ? <rect width="10" height="100" x="135" y="150" className="animate__animated animate__bounceInUp" /> : ""}
          {lives < 4 ? (
            <line
              x1="140"
              y1="180"
              x2="110"
              y2="230"
              stroke="black"
              stroke-linecap="round"
              stroke-width="10"
              className="animate__animated animate__bounceInLeft"
            />
          ) : (
            ""
          )}
          {lives < 3 ? (
            <line
              x1="140"
              y1="180"
              x2="170"
              y2="230"
              stroke="black"
              stroke-linecap="round"
              stroke-width="10"
              className="animate__animated animate__bounceInRight"
            />
          ) : (
            ""
          )}
          {lives < 2 ? (
            <line
              x1="140"
              y1="250"
              x2="120"
              y2="300"
              stroke="black"
              stroke-linecap="round"
              stroke-width="10"
              className="animate__animated animate__bounceInLeft"
            />
          ) : (
            ""
          )}
          {lives < 1 ? (
            <line
              x1="140"
              y1="250"
              x2="160"
              y2="300"
              stroke="black"
              stroke-linecap="round"
              stroke-width="10"
              className="animate__animated animate__bounceInRight"
            />
          ) : (
            ""
          )}
        </svg>
      </div>
    </>
  );
}
