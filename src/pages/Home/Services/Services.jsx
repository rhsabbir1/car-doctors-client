import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
const [services , setServices]  = useState([])

useEffect(()=>{
fetch('http://localhost:5000/services')
.then(res => res.json())
.then(data => setServices(data))
},[])


    return (
        <div className='my-4'>
            <div className='text-center w-1/2 mx-auto'>
                <h3 className='text-3xl text-orange-700'>Service</h3>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-10'>
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                    >
                    </ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;