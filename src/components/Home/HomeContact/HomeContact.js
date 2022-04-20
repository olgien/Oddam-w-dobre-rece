import './HomeContact.scss';
import Background from './Background-Contact-Form.jpg';
import Facebook from './Facebook.svg';
import Instagram from './Instagram.svg';

export const HomeContact = () => {
  return <div className={'HomeContact'}>

    <div className={'container'}>
      <div className={'imageContainer'}>
        <img src={Background}/>
      </div>
      <div className={'contact'}>
        <h2>Skontaktuj się z nami</h2>
      </div>
    </div>
    <div className={'footer'}>
      <div className={'copyright'}>
        <p> Copyright by Coders Lab</p>
      </div>
      <div className={'socials'}>
        <img src={Facebook}/>
        <img src={Instagram}/>
      </div>
    </div>
  </div>
}