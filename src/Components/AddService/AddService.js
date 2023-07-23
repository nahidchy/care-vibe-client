import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const AddService = () => {
  const {user}=useContext(AuthContext)
      
    const handleSubmit=(event)=>{
     
       event.preventDefault();
       const form=event.target;
       const name=form.name.value;
       const image= form.url.value;
       const uid=user?.uid;
       const description= form.details.value;
       const service={name,image,description,uid}
       fetch('https://care-vibe-server.vercel.app/services',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(service)
       })

       .then(res=>res.json())
     .then(data=>{
        if(data.acknowledged){
            alert('Service added successfully')
            form.reset();
        }
     })
    }
    
    return (
        <div className='py-20  lg:pb-0 lg:py-40 container'>
           <h3 className='text-4xl lg:text-7xl font-bold text-center py-5'>Add Your Service</h3>
           <form onSubmit={handleSubmit} className="card-body min-h[1000px] pb-96 w-full lg:w-2/3 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Service Name</span>
          </label>
          <input type="text" placeholder="Service Name" name='name' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Image Url</span>
          </label>
          <input type="text" placeholder="Image Url" name='url' required className="input input-bordered" />
        </div>
        <div className="form-control pb-12 lg:pb-0">
          <label className="label">
            <span className="label-text font-semibold">Details</span>
          </label>
          <textarea type="text" placeholder="Write about atleast 100 words" name='details' required className="p-3 input input-bordered h-60 " />
        </div>
        <div className="form-control pb-96 mt-6 w-40 mx-auto">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
       
      </form>
           
        </div>
    );
};

export default AddService;