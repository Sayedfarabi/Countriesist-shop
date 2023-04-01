import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';

const Root = () => {
    return (
        <main>
            <section>
                <Navbar></Navbar>
            </section>
            <section className='min-h-[85vh]'>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </main>
    );
};

export default Root;