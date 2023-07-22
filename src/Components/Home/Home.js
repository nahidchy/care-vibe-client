
import './home.module.css';
import banner from './../../Assets/banner.jpg';
import { CheckIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Home = () => {
    const services = useLoaderData();
    const carouselData = [
        {
            'img': 'https://assets.speareducation.com/userfiles/Gary_DeWood/shutterstock_284500439.jpg',
            'name': 'Dentist'
        },
        {
            'img': 'https://blog.logansportmemorial.org/hs-fs/hubfs/what-does-a-neurologist-do.jpg?width=1270&height=702&name=what-does-a-neurologist-do.jpg',
            'name': 'Neorologist'
        },
        {
            'img': 'https://floridapremiercardio.com/wp-content/uploads/heart-doctor-2009.jpg',
            'name': 'Cardiology'
        },
        {
            'img': 'https://img.freepik.com/premium-photo/medical-doctor-doing-heart-health-checkup-patient-bed-listening-healthy-heartbeat-consulting-black-man-after-surgery-hospital-sick-male-person-doing-tests-with-healthcare-worker_590464-76467.jpg',
            'name': 'Genaral Checkup'
        },
        {
            'img': 'https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Testing%201200x666.jpg?itok=XpRzClHl',
            'name': 'Laboratory Analysis'
        },
        {
            'img': 'https://kiiky.com/wp-content/uploads/2019/10/best-physical-therapy-schools-in-california.jpg',
            'name': 'Physical Therapy'
        }
    ]

    const settings1 = {

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    
    return (
        <div className=''>
            <div className=''>
                <div className='relative'>
                    <img className='w-full top-0 h-[60vh] lg:h-screen relative object-center  ' src={banner} alt=''></img>
                </div>
                <div className='absolute top-0 right-0 left-0 bg-black bg-opacity-20 flex items-center justify-center mx-auto h-[60vh] lg:h-screen'>
                    <div className=' lg:p-10 p-1 text-center'>
                        <h1 className='text-white lg:text-8xl text-5xl font-extrabold'>Health & Medical Center</h1>
                        <h1 className='text-white  text-xl mt-4 lg:text-3xl font-semibold'>We care for you health. So, 99% of our clients recommend us.</h1>
                        <button className='text-black font-semibold lg:font-bold btn px-2 lg:px-4 bg-primary hover:bg-primary mt-5'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='container lg:flex gap-14 items-center justify-center w-full  lg:py-28'>
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
            <hr className="container w-2/3 my-2 border-t-1 border-gray-400" />
            <div className=' py-20 container'>
                <h2 className='text-5xl font-bold'>Services</h2>
                <div className='lg:flex gap-10 items-center justify-center mx-auto w-full py-5 lg:py-12'>
                    {
                        services.map(service =>
                            <div className='w-full relative mt-5 lg:mt-0' key={service._id}>
                                <img className={`h-[400px]  rounded w-full mx-auto object-cover`} src={service.image} alt=''></img>
                                <div className='absolute flex flex-col items-center justify-center top-0 left-0 right-0 bg-black bg-opacity-25 w-full h-full'>

                                    <p className='  text-center text-4xl text-white font-extrabold  '>{service.name}</p>
                                    <Link to={`/services/${service._id}`}>
                                    <button className='mt-2 text-white font-bold'>Read More...</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='flex items-center justify-center'> <Link to='/services'><button className='text-black font-semibold lg:font-bold btn px-8 lg:px-8 bg-primary hover:bg-primary'>See All</button></Link></div>
            </div>
            <hr className="container w-2/3 my-2 border-t-1 border-gray-400" />
            <div className='py-20 w-full'>
                <img className='w-full h-60 lg:h-[550px] object-cover' src='https://torange.biz/photofxnew/210/HD/vivid-colors-blur-frame-fragment-diagnosis-210985.jpg' alt=''></img>
            </div>
            <div className='py-20 container'>
                <h3 className='text-4xl lg:text-6xl font-bold text-center'>Our Doctors</h3>
                <div className='text-black py-20'>
                    <Slider {...settings1}>
                        {
                            carouselData.map((data, id) =>

                                <div className='w-full h-60 px-5' key={id}>
                                    <img className='w-full h-full' src={data.img} alt=''></img>
                                    <h3 className='text-center text-2xl font-bold'>{data.name}</h3>
                                </div>

                            )
                        }
                    </Slider>
                </div>
            </div>
            
        </div>
    );
};

export default Home;