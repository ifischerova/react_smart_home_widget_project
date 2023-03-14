import React, { useState } from 'react';
import './blinds.css';
import blindsOpen from './images/blinds-open.svg';
import blindsClosed from './images/blinds-closed.svg';

const Blinds = ({ state }) => {

    const [blindsState, setBlindsState] = useState(state)

    return (
        
        <>
         <div className="blinds">
				<div className="blinds__icon">
					<img src={blindsState === 'open' ? blindsOpen : blindsClosed} />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button onClick={() => setBlindsState('closed')} className={blindsState === 'open' ? "button button--active" : "button"}>Otevřeno</button>
					<button onClick={() => setBlindsState('open')} className={blindsState === 'open' ? "button" : "button button--active"}>Zavřeno</button>
				</div>
			</div>
        </>
    );
};

export default Blinds;