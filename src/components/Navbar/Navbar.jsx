import React, { useState } from 'react';
import './navbar.scss';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {

    const[isExpanded, setExpanded] = useState(false);

    const menuItems = ['Home', 'About', 'Skills', 'Projects','Contact'];

    function handleMenu() {

        setExpanded(!isExpanded);

    }
  return (
    <header>
        <div className="logo">ANANTH</div>
        <div className="menu">

            {menuItems?.map((item, index) =>

                <Link key={index} to={item} smooth duration={500} >{item}</Link>

            )}
        
        </div>
        <button className="menu-icon" onClick={handleMenu}>
        { isExpanded ? <IoClose size={'25px'} /> : <IoMenu size={'25px'} />}
        </button>
        { isExpanded &&
            <div className="mobile-menu" >
                {menuItems?.map((item, index) =>

                <Link key={index} to={item} smooth duration={500} onClick={()=> setExpanded(false)} >{item}</Link>

                )}

            </div>
        }
    </header>
  )
}

export default Navbar