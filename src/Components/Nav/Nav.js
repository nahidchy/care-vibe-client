import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const MenuItems = <>
    <li><Link>Home</Link></li>
    <li><Link>Services</Link></li>
    <li><Link>Reviews</Link></li>
    <li><Link>About</Link></li>
  </>
  return (
    <div className='absolute z-10 w-full '>
      <div className="navbar  text-white  container  mx-auto brightness-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="text-black flex flex-col justify-center gap-6 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {MenuItems}
            </ul>
          </div>
          <Link><h3 className='lg:text-3xl text-xl font-bold'>Care Vibe</h3></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center gap-10 text-lg menu-horizontal px-1">
            {MenuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className='btn-sm font-semibold lg:btn-md rounded bg-white text-black'><Link>Button</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Nav;