import React, { useContext } from 'react';
import { DataContext } from '../ServicesHeader/ServicesHeader';

const Services = () => {
    const data=useContext(DataContext)
    return (
        <div>
            {data}
        </div>
    );
};

export default Services;