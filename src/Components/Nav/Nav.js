import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Nav = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const handleLogPut = () => {
    logOut()
      .then((result) => {})
      .catch(() => {});
  };
  const MenuItems = (
    <>
      <li className="lg:text-xl font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="lg:text-xl font-bold">
        <Link to="/services">Services</Link>
      </li>
      <li className="lg:text-xl font-bold">
        <Link to="/addService">Add Service</Link>
      </li>
      <li className="lg:text-xl font-bold">
        <Link to="/aboutUs">About</Link>
      </li>
      <li className="lg:text-xl font-bold">
        <Link to="/myReviews">My Reviews</Link>
      </li>
      <li className="lg:text-xl font-bold">
        <Link to="/login">Login</Link>
      </li>
     
    </>
  );
  return (
    <div className="absolute z-10 w-full">
      <div
        className={`navbar ${
          location.pathname == "/" ? "text-white" : "text-black"
        }    shadow-sm container  mx-auto brightness-100`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" flex text-black p-5 flex-col justify-center gap-6 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MenuItems}
            </ul>
          </div>
          <Link to="/">
            <h3 className="lg:text-4xl  text-xl font-bold">Care Vibe</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center gap-10 text-lg menu-horizontal px-1">
            {MenuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <button
              className="text-white font-semibold lg:font-bold btn px-2 lg:px-4 bg-primary hover:bg-primary"
              onClick={handleLogPut}
            >
              Log Out
            </button>
          ) : (
            <Link to="/signUp">
              {" "}
              <button className="text-white font-bold lg:font-bold btn px-2 lg:px-4 bg-primary hover:bg-primary">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
