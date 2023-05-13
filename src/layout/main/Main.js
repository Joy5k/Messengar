import React from 'react';
import Navbar from '../../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';

const Main = () => {
    return (
        <div>
            <Dashboard></Dashboard>
            {/* <Navbar></Navbar>
            <Outlet></Outlet> */}
        </div>
    );
};

export default Main;