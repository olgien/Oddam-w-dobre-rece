import './HomeContact.scss';

import {Footer} from "../../Footer/Footer";

import Background from './Background-Contact-Form.jpg';


export const HomeContact = () => {
  return <div className={'HomeContact'}>
    <div className={'imageContainer'}>
      <img src={Background}/>
    </div>
    <div className={'container'}>
      <div className={'contact'}>
        <h2>Skontaktuj się z nami</h2>
      </div>
    </div>
    <Footer/>


  </div>
}