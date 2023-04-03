import React from 'react';
import Countries from './countries/Countries';
import Banner from './banner/Banner';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Countries></Countries>
        </section>
    );
};

export default Home;