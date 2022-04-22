import './HomeContact.scss';

import {ContactForm} from "../../ContactForm/ContactForm";
import {Footer} from "../../Footer/Footer";

import Background from './Background-Contact-Form.jpg';
import {Decoration} from "../../Decoration/Decoration";


export const HomeContact = () => {
  return <div className={'HomeContact'}>
    <div className={'wrapper'}>
      <div className={'imageContainer'}>
        <img src={Background}/>
      </div>
      <div className={'container'}>
        <div className={'contact'}>
          <h2>Skontaktuj się z nami</h2>
          <Decoration/>
          <ContactForm/>
        </div>
      </div>

    </div>
    <Footer/>


  </div>
}