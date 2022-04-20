import Icon1 from './Icon-1.svg';
import Icon2 from './Icon-2.svg';
import Icon3 from './Icon-3.svg';
import Icon4 from './Icon-4.svg';

import './HomeFourColumns.scss';

export const HomeFourColumns = () =>  {
    return(
        <div className='fourColumns'>
           <h2>  Wystarczą 4 proste kroki </h2>

// tu powinna być dekoracja

            <div className='four-column-container'>
                <div className='column'>
                    <img src={Icon1}/>
                 <h4>Wybierz rzeczy</h4>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='column'>
                    <img src={Icon2}/>
                    <h4>Spakuj je</h4>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className='column'>
                    <img src={Icon3}/>
                    <h4>Zdecyduj komu chcesz pomóc</h4>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className='column'>
                    <img src={Icon4}/>
                  <h4>Zamów kuriera</h4>
                    <hr/>

                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>

        </div>

    );
}