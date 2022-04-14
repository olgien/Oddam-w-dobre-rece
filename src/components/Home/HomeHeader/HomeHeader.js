import HeroImage from '../Home-Hero-Image.jpg';

import './HomeHeader.scss';

export const HomeHeader = () => {
  return <div className={"HomeHeader"}>
    {/*<img src={HeroImage}/>*/}
    <div className="firstNav">
    <a href='#'>Zaloguj</a><a href='#'>Załóż konto</a>
    </div>

  </div>;
};