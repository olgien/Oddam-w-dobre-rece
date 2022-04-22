import React from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { scroller } from "react-scroll";
// import { ROUTES_TO_CLASSNAMES_MAP } from "../../constants/routes";


import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeFourColumns} from "./HomeFourColumns/HomeFourColumns";

import './Home.scss';
import {HomeHeading} from "./HomeHeading/HomeHeading";
import {Button} from "../Button/Button";
import {HomeAbout} from "./HomeAbout/HomeAbout";
import {HomeFoundation} from "./HomeFoundation/HomeFoundation";
import {HomeContact} from "./HomeContact/HomeContact";

export function Home(props) {
  // const pathname = useLocation().pathname;
  //
  // useEffect(() => {
  //   const scrollElement = ROUTES_TO_CLASSNAMES_MAP[pathname];
  //   if (scrollElement) {
  //     console.log("MATCHED", scrollElement);
  //     scroller.scrollTo(scrollElement, {
  //       duration: 1000,
  //       delay: 50,
  //       smooth: "easeInOutQuint"
  //     });
  //   }
  // }, [pathname]);

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