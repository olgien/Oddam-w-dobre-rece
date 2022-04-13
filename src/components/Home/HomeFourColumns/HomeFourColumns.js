import './HomeFourColumns.scss';

export const HomeFourColumns = () =>  {
    return(
        <div className='fourColumns'>
           <p>  Wystarczą 4 proste kroki </p>

            <div className='firstCol'>
             <h4>Wybierz rzeczy</h4>
                <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className='secCol'>
                <h4>Spakuj je</h4>
                <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className='thirdCol'>
                <h4>Zdecyduj komu chcesz pomóc</h4>
                <p>wybierz zaufane miejsce</p>
            </div>
            <div className='fourthCol'>
                <h4>Zamów kuriera</h4>
                <p>kurier przyjedzie w dogodnym terminie</p>
            </div>

        </div>

    );
}