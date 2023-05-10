import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            Bismillah
            <Outlet></Outlet>
        </div>
    );
};

export default Main;