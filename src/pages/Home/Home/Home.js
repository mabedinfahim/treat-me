import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ServicesHeader from '../ServicesHeader/ServicesHeader';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ServicesHeader/>
            <Services/>
        </div>
    );
};

export default Home;