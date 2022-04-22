import './ContactForm.scss';

export const ContactForm = () => {
  return ( <div className={'ContactForm'}>

      <div className={'contactWrapper'}>
        <div className={'name'}>
          <p>Wpisz swoje imię</p>
          <input type="text" placeholder={'Krzysztof'}/>
        </div>
        <div className={'email'}>
          <p>Wpisz swój email</p>
          <input type="text" placeholder={'abc@xyz.pl'}/> <br/>
        </div>
      </div>
      <p>Wpisz swoją wiadomość</p>
      <textarea rows="4" cols="30" placeholder={'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>

      </textarea>


    </div>
  );
}