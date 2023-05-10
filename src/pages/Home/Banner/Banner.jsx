import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full my-4">
            <div id="slide1" className=" carousel-item relative w-full h-[600px]">
                <img src={banner1} className="w-full rounded-lg" />

                <div className="rounded-lg absolute flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
                    <div className='text-white w-1/2 pl-12'>
                        <h1 className='text-7xl mb-4 font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='mb-4'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-active btn-primary mr-4">Discover More</button>

                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-5">
                    <a href="#slide4" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

                {/*-------------- slider text ---------- */}


            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={banner2} className="w-full" />


                <div className="absolute rounded-lg flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
                    <div className='text-white w-1/2 pl-12'>
                        <h1 className='text-7xl mb-4 font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='mb-4'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>



                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-5">
                    <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={banner3} className="w-full" />


                <div className="absolute flex rounded-lg h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
                    <div className='text-white w-1/2 pl-12'>
                        <h1 className='text-7xl mb-4 font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='mb-4'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-5">
                    <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={banner4} className="w-full" />


                <div className="absolute flex rounded-lg h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
                    <div className='text-white w-1/2 pl-12'>
                        <h1 className='text-7xl mb-4 font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='mb-4'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-5">
                    <a href="#slide3" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;