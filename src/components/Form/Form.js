import './Form.scss';
import {FormHeader} from "./FormHeader/FormHeader";
import {ContactForm} from "../ContactForm/ContactForm";

export const Form = () => {
  return (
    <div className={'Form'}>

      <FormHeader/>
      <ContactForm/>

    </div>
  );
}