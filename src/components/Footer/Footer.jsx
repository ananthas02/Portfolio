import React from 'react';
import './footer.scss';

const Footer = () => {

    const year = new Date().getFullYear();

  return (

    <footer className='footer'>

        <div className="container flex-res">
        
            <p>Copyright @S.ANANTH {year}</p>
        
        </div>

    </footer>

  )

}

export default Footer