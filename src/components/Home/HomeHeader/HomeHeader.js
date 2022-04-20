import './HomeHeader.scss';
import {Button} from "../../Button/Button";

export const HomeHeader = () => {
  return <div className={"HomeHeader"}>
    <div className="firstNav">
      <Button navTo={"/"} size={'xs'}>Zaloguj</Button>
      <Button navTo={"/"} size={'xs'}>Załóż konto</Button>
    </div>

  </div>;
};