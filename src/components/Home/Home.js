import React from "react";

import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeFourColumns} from "./HomeFourColumns/HomeFourColumns";

import './Home.scss';
import {HomeHeading} from "./HomeHeading/HomeHeading";
import {Button} from "../Button/Button";
import {HomeAbout} from "./HomeAbout/HomeAbout";
import {HomeFoundation} from "./HomeFoundation/HomeFoundation";
import {HomeContact} from "./HomeContact/HomeContact";

export function Home(props) {
  return (
    <div className='Home'>
        <HomeHeading/>
        <HomeThreeColumns/>
        <HomeFourColumns/>
         <div className={'buttonStyle'}>
           <Button navTo={"/"} size='l' style={{width: '250px'}}>Oddaj <br/> rzeczy</Button>
         </div>
        <HomeAbout/>
        <HomeFoundation/>
        <HomeContact/>
    </div>
  );
}