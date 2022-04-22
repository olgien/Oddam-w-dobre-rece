import React from "react";
// import { Element } from "react-scroll";
// import { ROUTES_TO_CLASSNAMES_MAP } from
// import { HOME_ROUTE } from

import {HomeHeader} from "../HomeHeader/HomeHeader";
import {HomeNavbar} from "../HomeNavbar/HomeNavbar";

import './HomeHeading.scss';
import {Button} from "../../Button/Button";
import {Decoration} from "../../Decoration/Decoration";

export const HomeHeading = () => {
  return (
  <div className="HomeHeading">
    <HomeHeader/>
    <HomeNavbar/>
    <div className="wrapper">
      <div className='start'>
        <p className='text'>
          Zacznij pomagać! <br/>
          Oddaj niechciane rzeczy w zaufane ręce
        </p>
        <Decoration/>
        <div className="start-buttons">
          <Button className='button-heading' navTo={"/src/components/Form/Form.js"} size="l" style={{width: '250px'}}>Oddaj <br/> rzeczy</Button>
          <Button className='button-heading' navTo={"/"} size="l" style={{width: '250px'}}>Zorganizuj<br/> zbiórkę</Button>
        </div>
      </div>
    </div>

  </div>

      );
}