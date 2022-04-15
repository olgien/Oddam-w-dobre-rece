import './HomeNavbar.scss';
import {Button} from "../../Button/Button";

export const HomeNavbar = () => {
  return <div className={"HomeNavbar"}>
    <div className="secondNavbar">
      <Button navTo={"/"}>Start</Button>
      {/*<Button size="m" navTo={"/"}>Start - test - duży</Button>*/}
      <Button navTo={"/"}>O co chodzi?</Button>
      <Button navTo={"/"}>O nas</Button>
      <Button navTo={"/"}>Fundacja i organizacje</Button>
      <Button navTo={"/"}>Kontakt</Button>
    </div>
  </div>;
};

