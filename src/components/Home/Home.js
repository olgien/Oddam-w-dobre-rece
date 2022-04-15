import React from "react";

import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeFourColumns} from "./HomeFourColumns/HomeFourColumns";

import './Home.scss';
import {HomeHeading} from "./HomeHeading/HomeHeading";
import {Button} from "../Button/Button";
import {About, HomeAbout} from "./HomeAbout/HomeAbout";

export function Home(props) {
  return (
    <div className='Home'>
        <HomeHeading/>
        <HomeThreeColumns/>
        <HomeFourColumns/>
        <Button className='button-heading' navTo={"/"}>Oddaj rzeczy</Button>
        <HomeAbout/>
    </div>
  );
}