import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CommnetEditModal = ({review}) => {


    const handleEdit=(event)=>{
      event.preventDefault();
      const form=event.target;
      const comment = event.target.comment.value;
      fetch(`http://localhost:5000/reviews/${review._id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({comment})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
       if(data.modifiedCount>0){
        form.comment.value = ""
       }
        
      })

    }
    return (

      
          <div className="modal" id="my_modal_8">
        <form onSubmit={handleEdit} className="modal-box">
         <textarea name='comment' className='p-3 border border-1 border-gray-500 rounded-lg w-full' defaultValue={review.commnet}></textarea>
          <div className="modal-action">
            <button type='submit'  className='btn'>Update</button>
           <a href="#" className="btn">Close!</a>
          </div>
        </form>
      </div>
    

    );
};

export default CommnetEditModal; 