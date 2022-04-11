import React from "react";

import {HomeHeader} from "./HomeHeader/HomeHeader";

import './Home.scss';

export function Home(props) {
  return (
    <div className="home">
      <HomeHeader/>
      <p className="text">
        tekst na stronie główne
      </p>
    </div>
  );
}