import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
const AboutUs = () => {
    return (
        <div className='container py-32'>
            <h1 className='text-center text-5xl lg:text-7xl font-bold mb-10'>About Us</h1>
            <div className=''>
                <img className='w-full h-[400px] lg:h-[550px] object-fill' src='https://img.freepik.com/premium-photo/group-doctors-standing-front-hospital-room_889227-23144.jpg' alt=''></img>
            </div>
              <div className=' lg:flex gap-14 items-center justify-center w-full py-10 lg:py-28'>
                <div className='w-full lg:w-1/2'>
                    <div className='text-left w-full mt-10'>
                        <h2 className='text-2xl  lg:text-5xl font-extrabold'>Choose The Top Clinic For</h2>
                        <h2 className='text-2xl lg:text-5xl font-extrabold mt-3'>Yourself and Your Family </h2>
                    </div>
                    <div className='flex items-center w-full lg:w-2/3 gap-10 mt-10 lg:mt-20'>
                        <div className='w-1/2'>
                            <img className='w-full object-cover' src='https://www.pngfind.com/pngs/m/674-6744588_signature-transparent-art-transparent-background-signature-png-png.png' alt=''></img>
                        </div>
                        <div className='text-left w-2/3'>
                            <h3 className='text-3xl font-bold'>Tom Henders</h3>
                            <h4 className='text-xl font-semibold text-gray-500'>CEO of Company</h4>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <p className='text-2xl font-medium w-full text-left text-gray-500'>
                        Choose our clinic for unmatched family healthcare. With a team of skilled professionals, cutting-edge facilities, and a patient-centered approach, we prioritize your well-being. </p>
                    <p className='text-2xl font-medium w-full text-left text-gray-500 mt-5'>
                        From personalized treatments to preventive care, we are committed to ensuring the best medical solutions for you and your loved ones. Trust us to be your partner in maintaining a healthy and happy family.</p>
                </div>
            </div>
            <hr className="container w-2/3 my-4 border-t-1 border-gray-400" />
            <div className='container'>
                <div className='lg:flex items-center justify-between py-20 text-start'>
                    <div className='flex items-center gap-2 text-xl font-bold'>
                        <CheckIcon className='h-6 w-6  text-blue-800'></CheckIcon>
                        <p>Constant Improvement</p>
                    </div>
                    <div className='flex items-center gap-2 text-xl font-bold mt-5 lg:mt-0'>
                        <CheckIcon className='h-6 w-6  text-blue-800'></CheckIcon>
                        <p>
                            Commitment to Customers</p>
                    </div>
                    <div className='flex items-center gap-2 text-xl font-bold mt-5 lg:mt-0'>
                        <CheckIcon className='h-6 w-6  text-blue-800'></CheckIcon>
                        <p>
                            Best Quality You Can Get</p>
                    </div>
                    <div className='flex items-center gap-2 text-xl font-bold mt-5 lg:mt-0'>
                        <CheckIcon className='h-6 w-6  text-blue-800'></CheckIcon>
                        <p>More than 30 available services</p>
                    </div>
                </div>
            </div>
            <hr className="container w-2/3 my-4 border-t-1 border-gray-400" />
            <div className='pb-5'>
              <p className='text-gray-500'>
              At Care Vibe, we embrace the latest advancements in medical technology to enhance the accuracy and effectiveness of our treatments. Our state-of-the-art facilities and equipment allow us to deliver cutting-edge healthcare services, setting new standards in the medical industry.
              </p>
            </div>
        </div>
    );
};

export default AboutUs;