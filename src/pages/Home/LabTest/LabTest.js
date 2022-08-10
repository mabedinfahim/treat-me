import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../../Card/Card';

const LabTest = () => {
    const [test,setTest]=useState([]);
    useEffect(()=>{
        fetch('/labtest.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            {test.map(data=><Card key={data.id} data={data}/>)}
        </div>
    );
};

export default LabTest;