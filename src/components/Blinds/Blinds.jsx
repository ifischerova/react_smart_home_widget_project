import React, { useState } from 'react';
import './blinds.css';
import blindsOpen from './images/blinds-open.svg';
import blindsClosed from './images/blinds-closed.svg';

const Blinds = ({ state }) => {

    const [stateVar, setStateVar] = useState(state)

    return (
        
        <>
         <div className="blinds">
				<div className="blinds__icon">
					<img src={stateVar === 'open' ? blindsOpen : blindsClosed} />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button onClick={() => setStateVar('closed')} className={stateVar === 'open' ? "button button--active" : "button"}>Otevřeno</button>
					<button onClick={() => setStateVar('open')} className={stateVar === 'open' ? "button" : "button button--active"}>Zavřeno</button>
				</div>
			</div>
        </>
    );
};

export default Blinds;