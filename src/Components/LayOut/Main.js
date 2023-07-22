import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='relative'>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;