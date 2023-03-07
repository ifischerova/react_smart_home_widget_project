import React, { useState } from 'react';
import './climate.css';
import Temperature from './images/temp.svg';

const Climate = ({ temperature, humidity }) => {
    
    const [ tempStateVar , setTemperature1 ] = useState(temperature);

    return (
        <>
         <div className="climate">
				<div className="climate__icon">
					<img src={Temperature} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{tempStateVar}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={() => setTemperature1(tempStateVar + 1)}>+</button>
					<button className="button" onClick={() => setTemperature1(tempStateVar - 1)}>-</button>
				</div>
			</div> 
        </>
    );
};

export default Climate;