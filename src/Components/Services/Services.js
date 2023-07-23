import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const Services = () => {
    const services = useLoaderData();
    return (
        <div className='py-20 pb-80 lg:py-44 container'>

            <h1 className='text-5xl lg:text-7xl font-bold pt-10 text-center'>Services</h1>
            <div className='lg:grid grid-cols-2 gap-20 items-center justify-center mx-auto w-full pt-10 pb-32 mb-96'>
                {
                    services.map(service =>
                        <div className='w-full mt-5 lg:mt-0 relative' key={service._id}>
                            <img className={`h-[400px]  rounded w-full mx-auto object-cover`} src={service.image} alt=''></img>
                            <div className='absolute flex flex-col items-center justify-center top-0 left-0 right-0 bg-black bg-opacity-25 w-full h-full'>
                               
                                    <p className='  text-center text-5xl text-white font-extrabold  '>{service.name}</p>
                
                              
                                    <Link to={`/services/${service._id}`}><button className='btn bg-opacity-30 btn-md mt-5 font-bold'>Read more</button></Link>
                            
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Services;