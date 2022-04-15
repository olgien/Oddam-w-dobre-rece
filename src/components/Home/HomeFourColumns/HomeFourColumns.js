import './HomeFourColumns.scss';

export const HomeFourColumns = () =>  {
    return(
        <div className='fourColumns'>
           <h2>  Wystarczą 4 proste kroki </h2>

// tu powinna być dekoracja

            <div className='four-column-container'>
                <div className='column'>
                    <img src="Icon-1.svg"/>
                 <h4>Wybierz rzeczy</h4>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='column'>
                    <img src="Icon-2.svg"/>
                    <h4>Spakuj je</h4>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className='column'>
                    <img src="Icon-3.svg"/>
                    <h4>Zdecyduj komu chcesz pomóc</h4>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className='column'>
                    <img src="Icon-4.svg"/>
                    <hr/>
                    <h4>Zamów kuriera</h4>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>

        </div>

    );
}