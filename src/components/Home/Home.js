import React from "react";

import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeFourColumns} from "./HomeFourColumns/HomeFourColumns";

import './Home.scss';
import {HomeHeading} from "./HomeHeading/HomeHeading";

export function Home(props) {
  return (
    <div className='Home'>
      <HomeHeading/>
        <HomeThreeColumns/>
        <HomeFourColumns/>
    </div>
  );
}