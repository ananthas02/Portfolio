import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <div className='page home' name='Home'>
      <div className="bg-image"></div>
      <div className="container flex-res">
        <div className="col-left">
          <h1><span>ANANTH</span><br/>SUNDARAVEL </h1>      
          <p className='excerpt'>Frontend developer</p>    
        </div>
      </div>
    </div>
  )
}

export default Home