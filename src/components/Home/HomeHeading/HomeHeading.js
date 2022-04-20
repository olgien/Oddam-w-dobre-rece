import React from "react";

import {HomeHeader} from "../HomeHeader/HomeHeader";
import {HomeNavbar} from "../HomeNavbar/HomeNavbar";

import './HomeHeading.scss';
import {Button} from "../../Button/Button";

export const HomeHeading = () => {
  return <div className="HomeHeading">
    <HomeHeader/>
    <HomeNavbar/>
    <div className="wrapper">
      <div className='start'>
        <p className='text'>
          Zacznij pomagać! <br/>
          Oddaj niechciane rzeczy w zaufane ręce
        </p>

        <div className="start-buttons">
          <Button className='button-heading' navTo={"/"} size="l" style={{width: '250px'}}>Oddaj <br/> rzeczy</Button>
          <Button className='button-heading' navTo={"/"} size="l" style={{width: '250px'}}>Zorganizuj<br/> zbiórkę</Button>
        </div>
      </div>
    </div>
  </div>
};