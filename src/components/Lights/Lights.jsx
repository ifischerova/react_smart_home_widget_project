import React from 'react';
import './lights.css';
import Light from '../Light/Light.jsx';

const Lights = (props) => {
    const { lights } = props;

    console.log(lights.state)

    return (
        <>
            <div className="lights">
                {lights.map((light) => <Light 
                    name={light.name} 
                    state={light.state}
                    key={light.name}
                />)}
            </div>
        </>
    );
};

export default Lights;