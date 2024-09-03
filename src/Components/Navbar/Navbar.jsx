import './Navbar.css';

import React from 'react';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div n-left>
        <div className='name'><h1>sai</h1></div>
       
    </div>
    <div className='n-right'>
        <div className='n-list'>
            <ul style={{ listStyleType: "none" }}>
                <li><Link activeClass="active" to="Home" spy={true} smooth={true}>
                Home
      
              </Link></li>
              <li><Link  to="About" spy={true} smooth={true}>
                About
              </Link></li>
              <li><Link  to="About" spy={true} smooth={true}>
                Skills
              </Link></li>
              <li><Link  to="About" spy={true} smooth={true}>
                Profile
              </Link></li>
              <li><Link  to="Work" spy={true} smooth={true}>
                Projects
              </Link></li>
             
               
            </ul>
            <div className='but'> <Link  to="Footer" spy={true} smooth={true}>
            
            
              </Link></div>
            <Link  to="Footer" spy={true} smooth={true}>
            <button className='button'>contacts</button>
            
              </Link>
            
        </div>
    </div>

    </div>


 
   



  

    
      
    
  )
}

export default Navbar
