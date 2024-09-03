import './Footer.css';

import React from 'react';

import git from '../img/github.png';
import insta from '../img/instagram.png';
import linkedin from '../img/linkedin.png';

const Footer = () => {
  return (
    <div div className='footer'id='Footer'  style={{top:'10rem'}}>
     
       <div className='f-page'>
       <div className='contact'>
       <span>sumanth24143@gmail.com</span>
       <span>09121699672</span>
       </div>
      
       
       <div className='f-icons' >
       <a href="https://github.com/sai24143"> <img src={git} alt=""  style={{ width: "45%"} }/></a>
       <a  href="https://www.linkedin.com/in/sai-sumanth-k-a085ba2a1/"><img src={linkedin}  alt=""  style={{ width: "45%"}}  /></a> 
       

      
       <img src={insta} alt=""  style={{ width: " "  } }/>
       
       
       
       </div>
       </div>
       
       
       
       
       
        </div>
      
     
     
     

      
    
  )
}

export default Footer
