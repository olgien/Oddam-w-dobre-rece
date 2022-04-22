import React from "react";

import {Button} from "../../Button/Button";

import './HomeFoundation.scss';
import {Decoration} from "../../Decoration/Decoration";

export const HomeFoundation = () => {
  return <div className={"HomeFoundation"}>

      <h2>Komu pomagamy?</h2>

      <Decoration/>

    <div className={'buttonsFoundation'}>
      <Button navTo={"/"} size='m' style={{width: '250px'}}> Fundacjom </Button>
      <Button navTo={"/"} size='m' style={{width: '250px'}}> Organizacjom <br/> pozarządowym </Button>
      <Button navTo={"/"} size='m' style={{width: '250px'}}> Lokalnym <br/> zbiórkom </Button>
    </div>
    <div className={'text'}>
      <p> W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
    </div>
    <div className={'listFoundation'}>
      {/*tu będzie lista fundacji*/}
    </div>

  </div>
}