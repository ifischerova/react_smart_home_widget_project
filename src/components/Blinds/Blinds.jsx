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
					<img src={stateVar ? blindsOpen : blindsClosed} />
				</div>
				<div className="blinds__name">
					Žaluzie
                    {stateVar}
				</div>
				<div className="blinds__controls">
					<button onClick={() => setStateVar('closed')} className="button button--active">Otevřeno</button>
					<button onClick={() => setStateVar('open')} className="button">Zavřeno</button>
				</div>
			</div>
        </>
    );
};

export default Blinds;