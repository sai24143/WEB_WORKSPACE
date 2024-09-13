import './About.css';

import React from 'react';

import Card from '../Card/Card';
import emoji from '../img/glasses.png';
import heart from '../img/heartemoji.png';

const About = () => {
  return (
    <div className='a-page' id="About">
        <div className='a-left'>
        
        
        <div className="a-name">sai  sumanth </div>
            <span>Full Stack developer with Persional experience in libraries and frameworks such as React.js, Django, and Python. Additionally, I have knowledge of the basics of Linux, GitHub, and Bash scripting.
</span>

<a href="https://docs.google.com/document/d/19W9ficRRRwrlPjYfQBWhS6sS2nEO7E0B/edit?usp=sharing&ouid=117985412890839154857&rtpof=true&sd=true"> <button className='button'> Resume</button> </a>

</div>

        




  
        
        <div className='a-right' >
        <div style={{top:'7rem'}}> <Card  
            img={heart}
            tittle={'desgin'}
            text={'Linux, GitHub, BashScript'}
        /></div>
         <Card   
            img={emoji}
            tittle={''}
            text={'Jennkins,Docker,k8s,Ansble'}
        />
        <div style={{top:'7rem'}}> <Card  
            img={heart}
            tittle={''}
            text={'Python,django, Reactjs'}
        /></div>
        </div>
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

export default About
