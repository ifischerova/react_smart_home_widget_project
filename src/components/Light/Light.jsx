import React, { useState } from 'react';
import './light.css';
import bulbOn from './images/light-on.svg';
import bulbOff from './images/light-off.svg';

const Light = ({ name, state }) => {

    // tohle muzu napsat rovnou do useState
    //let boolState = (state === 'on')
    /* delsi varianta toho nahore
    if (state === 'on') {
        boolState = true;
    } else {
        boolState = false;
    }
    */
    
    const [isLigthOn, setIsLightOn] = useState(state === 'on');

    return (
        <>
            <div className="light" onClick={() => setIsLightOn(!isLigthOn)}>
                <div className="light__icon">
                    <img src={isLigthOn ? bulbOn : bulbOff} alt=""/>
                </div>
                <div className="light__name">
                    {name}
                </div>
            </div>
        </>
    );
};

export default Light;