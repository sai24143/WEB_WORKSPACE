import './Work.css';

import React from 'react';

import Card from '../Card/Card';

// import heart from '../img/heartemoji.png'

// import emoji from '../img/glasses.png'

const Work = () => {
  return (
    <div className='work' id='Work'>
     
      <div className='p-name'><h1>my projects</h1> </div> 
  

 
      <div className='c-cards' style={{top:'3rem'}}>
        <Card 
            img={''}
            tittle={'"MY WEB WORKSPACE" '}
            text={'I built in single-page web Application is user friendly and interactive interface.it like a digital portifolio. '}
        />
         <Card 
            img={''}
            tittle={'Authentication'}
            text={''}
        />
         <Card 
            img={''}
            tittle={'"Authentication" '}
            text={'It is a secure and web login and signup pages are built using django framework.'}
        />
         <Card 
            img={''}
            tittle={''}
            text={''}
        />
        </div>
      
       
        
       

           
         
  
    </div>
  )
}

export default Work
