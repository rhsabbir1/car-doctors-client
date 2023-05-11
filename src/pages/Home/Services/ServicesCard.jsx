import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {title , img ,price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    
                    {title}
                </h2>
                <p className=' font-semibold text-yellow-500'>Price : ${price}</p>
                
                    <div className="badge badge-outline"><Link to={`/cheekout/${service._id}`}>Book Now</Link></div>
                
            </div>
        </div>
    );
};

export default ServicesCard;