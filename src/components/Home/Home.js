import React from "react";

import {HomeHeader} from "./HomeHeader/HomeHeader";
import {HomeNavbar} from "./HomeNavbar/HomeNavbar";

import './Home.scss';

export function Home(props) {
  return (
    <div className="home">
      <HomeHeader/>
        <HomeNavbar/>
        {/*<img className='background' src='./HomeHeader/Home-Hero-Image.jpg'/>*/}

        <p className="text">
        Zacznij pomagać! <br/>
            Oddaj niechciane rzeczy w zaufane ręce
      </p>
        <img src='src/assets/Decoration.svg' />
    </div>
  );
}