import React from 'react';
import './blinds.css';
import blindsOpen from './images/blinds-open.svg';
import blindsClosed from './images/blinds-closed.svg';

const Blinds = (props) => {
    const { state } = props;

    return (
        <>
         <div className="blinds">
				<div className="blinds__icon">
					<img src={blindsOpen}/>
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className="button button--active">Otevřeno</button>
					<button className="button">Zavřeno</button>
				</div>
			</div>
        </>
    );
};

export default Blinds;