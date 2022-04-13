import './HomeNavbar.scss';
import {Button} from "../../Button/Button";

export const HomeNavbar = () => {
  return <div className={"HomeNavbar"}>
    <div className="secondNavbar">
      <Button>Start - test</Button>
      <Button size="m" navTo={"/"}>Start - test - duży</Button>
      <a href='#'>Start</a>
      <a href='#'>O co chodzi?</a>
      <a href='#'>O nas</a>
      <a href='#'>Fundacja i organizacje</a>
      <a href='#'>Kontakt</a>
    </div>
  </div>;
};

