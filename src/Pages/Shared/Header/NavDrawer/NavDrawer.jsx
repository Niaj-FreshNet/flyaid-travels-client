import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const NavDrawer = ({ open, onClose }) => {


    return (
        <div className={`fixed inset-0 z-50 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-800 bg-opacity-25`}>
            <div onClick={onClose} className="w-1/2 md:w-4/5 h-screen absolute right-0">
            </div>
            <div className="flex flex-row bg-white w-56 h-full shadow-xl pl-5 py-8">
                <nav className="w-5/6 ">
                    <ul className="flex flex-col space-y-2 text-md p-4">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'underline font-bold text-black' : 'text-black'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/flight" className={({ isActive }) => isActive ? 'underline font-bold text-black' : 'text-black'}>
                                Flight
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/packages" className={({ isActive }) => isActive ? 'underline font-bold text-black' : 'text-black'}>
                                Packages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/offers" className={({ isActive }) => isActive ? 'underline font-bold text-black' : 'text-black'}>
                                Offers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline font-bold text-black' : 'text-black'}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'underline font-bold text-black' : 'text-black'}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button onClick={onClose} className="absolute btn btn-lg right-5 top-10 glass rounded-btn text-4xl text-black border-2 border-gray-300 hover:bg-gray-900 ">X</button>
            </div>
        </div>
    );
};
export default NavDrawer;
