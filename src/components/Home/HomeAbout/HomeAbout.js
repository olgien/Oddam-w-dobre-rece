import './HomeAbout.scss';
import Signature from './Signature.svg';
import People from './People.jpg';
import {Decoration} from "../../Decoration/Decoration";

export const HomeAbout = () => {
    return <div className={"HomeAbout"}>

      <div className={'aboutLeft'}>

        <h2>  O nas </h2>
        <Decoration/>
        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        <img src={Signature}/>

      </div>

      <div className={'aboutRight'}>

          <img src={People}/>
      </div>

        </div>
}