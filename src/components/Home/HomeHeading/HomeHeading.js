import React from "react";

import {HomeHeader} from "../HomeHeader/HomeHeader";
import {HomeNavbar} from "../HomeNavbar/HomeNavbar";

import './HomeHeading.scss';

export const HomeHeading = () => {
  return <div className="HomeHeading">
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
  </div>
};