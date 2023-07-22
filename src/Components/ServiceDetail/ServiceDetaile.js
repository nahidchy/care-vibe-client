import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import {AuthContext} from '../AuthProvider/AuthProvider'
const ServiceDetaile = () => {
    const {user}=useContext(AuthContext)
    const serviceDetail = useLoaderData();
    const [refresher, setRefresher] = useState(false);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const commnet = form.comment.value;
        const serviceId = serviceDetail._id;
        const review = { commnet,  serviceId, photo:user?.photoURL, name: user?.displayName};
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRefresher(!refresher)
                form.reset()
            })
    }
    return (
        <div className='container py-20 '>
            <div className='flex flex-col items-center justify-center mx-auto'>
                <div className='w-full lg:w-2/3 mt-10'>
                    <img className='rounded w-full h-full object-cover' src={serviceDetail.image} alt=''></img>
                    <h3 className='text-xl lg:text-4xl font-bold mt-5'>Name:{serviceDetail.name}</h3>
                    <p className='text-xl text-gray-500 mt-5'><span className='font-bold'>Details</span>:{serviceDetail.description}</p>
                    <form onSubmit={handleReview} className='py-10'>
                        <h3 className='text-2xl font-bold'>Add a review</h3>
                        <textarea className='border border-1 border-gray-500 w-full h-32 mt-5 p-2 text-gray-600 font-semibold' type='text' name='comment' required></textarea>
                        <button type='submit' className='btn btn-primary mt-5'>Comment</button>
                    </form>
                   <Review refresher={refresher} setRefresher={setRefresher} id={serviceDetail._id}></Review>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetaile;