import React from "react";

import {HomeHeader} from "./HomeHeader/HomeHeader";
import {HomeNavbar} from "./HomeNavbar/HomeNavbar";
import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeFourColumns} from "./HomeFourColumns/HomeFourColumns";

import './Home.scss';

export function Home(props) {
  return (
    <div className='home'>
      <HomeHeader/>
        <HomeNavbar/>
        {/*<img className='background' src='./HomeHeader/Home-Hero-Image.jpg'/>*/}
            <div className='start'>
                <p className='text'>
                    Zacznij pomagać! <br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                </p>
                <img src='src/assets/Decoration.svg' /><br/>
                <a href='#'>Oddaj rzeczy</a><a href='#'>Zorganizuj zbiórkę</a>
            </div>
        <HomeThreeColumns/>
        <HomeFourColumns/>
    </div>
  );
}