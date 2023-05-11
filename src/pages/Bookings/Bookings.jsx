import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../provider/AuthProvider';
import BookingTable from './BookingTable';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { user } = useContext(AuthContex)
    const [bookings, setBookData] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookData(data))
    }, [])
    console.log(bookings)

    const handleDelet = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            let remaning = bookings.filter(booking => booking._id !== id)
                            setBookData(remaning)
                            
                        }

                    })

            }
        })
    }

    const handleBooking =id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                const remaning = bookings.filter(booking => booking._id !==id)
                const updateData = bookings.find(booking => booking._id === id)
                updateData.status= 'confirm';
                const newBooking = [updateData , ...remaning]
                setBookData(newBooking)
            }
        })
    }


    return (
        <div>
            <h1 className='text-3xl text-orange-500 font-semibold text-center'>Your Booking : {bookings.length} items</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Products </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            bookings.map(booking => <BookingTable
                                key={booking._id}
                                booking={booking}
                                handleDelet={handleDelet}
                                handleBooking={handleBooking}
                            ></BookingTable>)
                        }
                    </tbody>


                </table>

            </div>

        </div>
    );
};

export default Bookings;