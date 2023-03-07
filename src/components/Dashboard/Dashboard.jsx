import React from 'react';
import Climate from '../Climate/Climate.jsx';
import Lights from '../Lights/Lights.jsx';
import Blinds from '../Blinds/Blinds.jsx';
import Energy from '../Energy/Energy.jsx';
import './dashboard.css';


const Dashboard = (props) => {
    const { dashboardData } = props;

    return (
        <>
            <main className="dashboard"> 
                <Lights lights={dashboardData.lights}/>
                <Climate temperature={dashboardData.climate.temperature} humidity={dashboardData.climate.humidity}/>
                <Blinds state={dashboardData.blinds} />
                <Energy electricity={dashboardData.energyConsumption.electricity} water={dashboardData.energyConsumption.water}/>
            </main>
        </>
    );
};

export default Dashboard;