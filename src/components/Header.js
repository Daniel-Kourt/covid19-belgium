import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navItems } from '../constants';

const Header = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    console.log(navItems);

    return (
        <div>
            <div className="flex justify-between items-center p-4">

                {/* ----- Logo ----- */}
                <h1 className="text-xl sm:text-2xl text-white font-bold">
                    <Link to="/">
                        Covid-19 Stats in Belgium
                    </Link> 
                </h1> 

                {/* ----- Menu Buttons ----- */}
                <div className="text-white text-2xl cursor-pointer" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    {menuIsOpen ? <FaTimes /> : <FaBars />}
                </div>
            
            </div>

            {/* ----- Menu ----- */}
            <div 
                className={`flex justify-end space-x-6 text-white pr-4 pb-4 ${menuIsOpen ? '' : 'hidden'} transition duration-300`}
                onClick={() => setMenuIsOpen(false)}
            >
                
                {navItems.map((item, idx) => (
                    <NavLink 
                        to={item.to} 
                        className="navlink" 
                        activeClassName="text-orange" 
                        key={`nav${idx}`}
                    >
                        {item.name}
                    </NavLink>
                ))}                
            </div> 
                    
        </div>
    )
}

export default Header
