import React, { useState } from 'react';
import './light.css';
import bulbOn from './images/light-on.svg';
import bulbOff from './images/light-off.svg';

const Light = ({ name, state }) => {

    const [stateVar, setState] = useState(state);

    return (
        <>
            <div className="light" onClick={() => setState(!stateVar)}>
                <div className="light__icon">
                    <img src={stateVar ? bulbOff : bulbOn} alt=""/>
                </div>
                <div className="light__name">
                    {name}
                </div>
            </div>
        </>
    );
};

export default Light;