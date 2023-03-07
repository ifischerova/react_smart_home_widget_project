import React, { useState } from 'react';
import './light.css';
import bulbOn from './images/light-on.svg';
import bulbOff from './images/light-off.svg';

const Light = ({ name, state }) => {

    let boolState = (state === 'on')
    /* delsi varianta toho nahore
    if (state === 'on') {
        boolState = true;
    } else {
        boolState = false;
    }
    */
    
    const [stateVar, setState] = useState(boolState);

    return (
        <>
            <div className="light" onClick={() => setState(!stateVar)}>
                <div className="light__icon">
                    <img src={stateVar ? bulbOn : bulbOff} alt=""/>
                </div>
                <div className="light__name">
                    {name}
                </div>
            </div>
        </>
    );
};

export default Light;