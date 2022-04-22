import React from "react";

import './FormHeader.scss';

import {HomeHeader} from "../../Home/HomeHeader/HomeHeader";
import {HomeNavbar} from "../../Home/HomeNavbar/HomeNavbar";


export const FormHeader = () => {
  return (
    <div className={'FormHeader'}>
      <HomeHeader/>
      <HomeNavbar/>
      <div className="wrapper">
        <div className='start'>
          <p className='headerText'>
            Oddaj rzeczy, których już nie chcesz </br>
            POTRZEBUJĄCYM
          </p>
        <div className={'fourSteps'}
        <p className={'text'}>
          Wystarczą 4 proste kroki:
        </p>
        <div className={'square'}> </div>
        <div className={'square'}> </div>
        <div className={'square'}> </div>
        <div className={'square'}> </div>

        </div>

        </div>
      </div>
    </div>
  );
}