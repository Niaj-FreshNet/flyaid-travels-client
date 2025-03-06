import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavDrawer from "../NavDrawer/NavDrawer";
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = () => {
  const navOptions = (
    <ul className="flex space-x-6">
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? 'underline font-bold text-white' : 'text-white'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/flight" className={({ isActive }) => isActive ? 'underline font-bold text-white' : 'text-white'}>
          Flight
        </NavLink>
      </li>
      <li>
        <NavLink to="/packages" className={({ isActive }) => isActive ? 'underline font-bold text-white' : 'text-white'}>
          Packages
        </NavLink>
      </li>
      <li>
        <NavLink to="/offers" className={({ isActive }) => isActive ? 'underline font-bold text-white' : 'text-white'}>
          Offers
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline font-bold text-white' : 'text-white'}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'underline font-bold text-white' : 'text-white'}>
          About
        </NavLink>
      </li>
    </ul>
  );

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="bg-[#0851A7] text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-4">
        <div className="navbar flex items-center gap-4">
          <div>
            <button tabIndex={0} role="button" className="btn btn-ghost btn-md lg:hidden" onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="#000000"
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
            </button>
          </div>
          <Link to="/" className="text-2xl font-bold">
            FlyAid Travels
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          {navOptions}
        </div>
      </div>
      <NavDrawer open={drawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default Navbar;
