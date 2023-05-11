import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Cheekout = () => {
    const service = useLoaderData()
    const { title, _id , price , img } = service;
    console.log(service)
    const {user} = useContext(AuthContex)

    const handleCheekOut = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order ={
            customerName: name,
            email,
            date,
            img: img,
            service: title,
            service_id: _id,
            price : price

        }
        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Order Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div>
            <h1 className='text-3xl font-semibold text-orange-500 text-center'>Book Service : {title}</h1>

            <form onSubmit={handleCheekOut}>
                <div className="card-body w-10/12 mx-auto">
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due</span>
                            </label>
                            <input type="text" defaultValue={price} className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-error text-white" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>


        </div>


    );
};

export default Cheekout;