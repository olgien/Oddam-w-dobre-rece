import './Footer.scss';

import Facebook from './Facebook.svg';
import Instagram from './Instagram.svg';

export const Footer = () => {
  return (
    <div className={'footer'}>
      <div className={'copyright'}>
        <p> Copyright by Coders Lab</p>
      </div>
      <div className={'socials'}>
        <img src={Facebook}/>
        <img src={Instagram}/>
      </div>
    </div>
  );

}





