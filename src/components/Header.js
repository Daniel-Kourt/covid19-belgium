import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <div>
            <div className="flex justify-between p-4">
                <h1 className="text-2xl text-white font-bold">
                    <Link to="/">
                        Covid-19 Stats in Belgium
                    </Link> 
                </h1> 

                <div className="text-white text-2xl" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    {menuIsOpen ? <FaTimes /> : <FaBars />}
                </div>
            
            </div>

            <div 
                className={`flex justify-end space-x-6 text-white pr-4 pb-4 ${menuIsOpen ? '' : 'hidden'} transition duration-1000 ease-in-out`}
                onClick={() => setMenuIsOpen(false)}
            >
                <NavLink to="/cases">Cases</NavLink>
                <NavLink to="/vaccinations">Vaccinations</NavLink>
                <NavLink to="/deaths">Deaths</NavLink>                
            </div> 
                        
        </div>
    )
}

export default Header
