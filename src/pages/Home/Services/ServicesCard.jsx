import React from 'react';

const ServicesCard = ({service}) => {
    const {title , img ,price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    
                    {title}
                </h2>
                <p className='text-2xl font-semibold text-yellow-500'>Price : ${price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;