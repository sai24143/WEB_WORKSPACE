import './Card.css';

import React from 'react';

const Card = ({ img,tittle,text }) => {
  return (
    <div className='Cards'>
    <img src={img} alt=""/>
    <span> {tittle}</span>
    <span>{text}</span>
     
    <a href='https://github.com/sai24143'> 
    <button className='button'>project</button>
    </a>
     
    

    
      
    </div>
  )
}

export default Card
