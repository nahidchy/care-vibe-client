import React from 'react';
import './home.module.css';
import banner from './../../Assets/banner.jpg'
const Home = () => {
    return (
        <div className='relative'>
            <div className=''>
                <img className='w-full h-[60vh] lg:h-screen  object-center  z-[-1] absolute' src={banner} alt=''></img>
                <div className='bg-black bg-opacity-40 flex items-center justify-center mx-auto h-[60vh] lg:h-screen'>
                   <div className=' lg:p-10 p-1'>
                   <h1 className='text-white lg:text-8xl text-5xl font-extrabold'>Health & Medical Center</h1>
                    <h1 className='text-white  text-xl mt-4 lg:text-3xl font-bold'>We care for you health. So, 99% of our clients recommend us.

                    </h1>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;