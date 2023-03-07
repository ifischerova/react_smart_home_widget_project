import React from 'react';
import './climate.css';
import Temperature from './images/temp.svg';

const Climate = (props) => {
    const { temperature, humidity } = props;

    return (
        <>
         <div className="climate">
				<div className="climate__icon">
					<img src={Temperature} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{temperature}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button">+</button>
					<button className="button">-</button>
				</div>
			</div> 
        </>
    );
};

export default Climate;