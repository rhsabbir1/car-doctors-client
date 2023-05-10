import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero py-20 bg-base-200 rounded-sm">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-5/6 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute top-1/2 border-white border-8 right-5 w-3/6 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 space-y-6'>
                    <h3 className='text-3xl text-red-600 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field !</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-error">Get More Info</button>

                </div>
            </div>
        </div>
    );
};

export default About;