import React from "react";

import {HomeHeader} from "../HomeHeader/HomeHeader";
import {HomeNavbar} from "../HomeNavbar/HomeNavbar";

import './HomeHeading.scss';
import {Button} from "../../Button/Button";

export const HomeHeading = () => {
  return <div className="HomeHeading">
    <HomeHeader/>
    <HomeNavbar/>
    <div className='start'>
      <p className='text'>
        Zacznij pomagać! <br/>
        Oddaj niechciane rzeczy w zaufane ręce
      </p>
      <Button className='button-heading' navTo={"/"}>Oddaj rzeczy</Button>
      <Button className='button-heading' navTo={"/"}>Zorganizuj zbiórkę</Button>

    </div>
  </div>
};