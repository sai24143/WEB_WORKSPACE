import './Home.css';

import React from 'react';

import Boy from '../img/boy.png';
import Crown from '../img/crown.png';
import Github from '../img/github.png';
import Humble from '../img/humble.png';
import Instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';

const Home = () => {
  return (
    
    <div className='home' id='Home'>
    <div className='h-left'>
    <div className='h-name'>
    <span>Hy! I Am</span>
      <span>sai sumanth </span>
      
       <span> Full Stack developer with Persional experience in libraries and frameworks such as React.js, Django, and Python. Additionally, I have knowledge of the basics of Linux, GitHub, and Bash scripting.
            </span>
            
          <button className='button' style={{width:'5cm'}}>Hire me</button>
        
        </div>
       <div className='h-icons' style={{}}>
       
       <a href="https://github.com/sai24143"><img src={Github} alt="" /></a> 
        <img src={Instagram} alt="" />
        <a href="https://www.linkedin.com/in/sai-sumanth-a085ba2a1/"><img src={linkedin} alt="" /></a> 

        


       </div>

     
        
       
      

      
    </div>
    <div className='h-right'>
    <img src={Crown} alt="" />
    <img src={Boy} alt="" />
   
    <img src={Humble} alt="" />

        
    </div>
    <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
   
      
    </div>
  )
}

export default Home
