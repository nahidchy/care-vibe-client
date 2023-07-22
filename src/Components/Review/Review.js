import React, { useEffect, useState } from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommnetEditModal from '../CommnetEditModal/CommnetEditModal';
const Review = ({ id, refresher,setRefresher }) => {
    const [modalOpen, setModalOpen] = useState(true)
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setRefresher(!refresher)
                setReviews(data)
            })
    }, [refresher, id])
    const diffToast=()=>{
        toast.error("Delete Successful",{
            position:"top-center"
        })
    }
   const handleDelete=(id)=>{
    fetch(`http://localhost:5000/reviews/${id}`,{
        method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            diffToast()
            const remainingComment= reviews.filter(comment=>comment._id !== id)
            setReviews(remainingComment)
        }
    })
     
   }
    return (
        <div className='py-5'>
            {
                reviews?.map((review, i) => <div className='flex gap-5 mt-5' key={i}>
                    <div>{ review.photo ? <img className='rounded-full w-[30px] lg:w-[50px]' src={review.photo} alt=''></img>: <UserIcon className='w-[30px] lg:w-[50px]'></UserIcon>}</div>
                    {review.name ? <p className='font-bold'>{review.name}</p> : <p className='font-bold'>anonymouse</p>}
                   <div>
                   <p className='text-black'>{review.commnet}</p>
                   <div className='text-end flex justify-end gap-3 mt-2'>
                   <a href="#my_modal_8" className="rounded text-sm bg-gray-300 px-3 text-gray-900">Edit</a>
                    <button onClick={()=>handleDelete(review._id)} className=' rounded text-sm bg-gray-300 px-3 text-gray-900'>delete</button>
                   </div>
                   </div>
                   <ToastContainer/>
                   <CommnetEditModal  review={review}/>
                </div>)
            }
        </div>
    );
};

export default Review;