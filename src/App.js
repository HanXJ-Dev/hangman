import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader";
const Home = lazy (() => import("./pages/home"));
const Game = lazy (() => import("./pages/game"));


function App() {
  return (
    <>
    <Router>
      <Suspense fallback ={<Preloader/>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
