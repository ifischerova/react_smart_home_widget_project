import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Header from './components/Header/Header.jsx';
import './style.css';
import smartHomeData from './smartHomeData.js';

const data = smartHomeData;

const App = () => (
  <>
    <div className="container">
        <Header title='Chytrý dům'/>
        <Dashboard dashboardData={data}/>
    </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);