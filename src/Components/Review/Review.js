import React, { useEffect, useState } from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

import 'react-toastify/dist/ReactToastify.css';

const Review = ({ id, refresher,setRefresher }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://care-vibe-server.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setRefresher(!refresher)
                setReviews(data)
            })
    }, [refresher, id])


    return (
        <div className='mb-96 pb-96 lg:pb-0'>
            {
                reviews?.map((review, i) => <div className='flex items-center gap-5 mt-5' key={i}>
                    <div>{ review.photo ? <img className='rounded-full w-[30px] lg:w-[50px]' src={review.photo} alt=''></img>: <UserIcon className='w-[30px] lg:w-[50px]'></UserIcon>}</div>
                    {review.name ? <p className='font-bold'>{review.name}</p> : <p className='font-bold'>anonymouse</p>}
                   <div>
                   <p className='text-black'>{review.commnet}</p>
                   </div>
                   <div>
                    {review.date}
                   </div>
                 
                </div>)
            }
        </div>
    );
};

export default Review;