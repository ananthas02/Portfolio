import React from 'react';
import './contact.scss';
import Linkedin from '../../assets/Logo/linkedin.svg';
import Gmail from '../../assets/Logo/gmail.svg';
import Resume from '../../assets/Pdf/ANANTH.S.pdf';
import Button from '../../components/Button/Button';

const Contact = () => {

  return (
    <div className='page contact' name='Contact'>

      <div className="bg-image"></div>

      <div className="container">

        <h2>Contact</h2>

        <p>I’m eager to connect with potential employers and discuss exciting opportunities. Feel free to reach out through the following methods:</p>
        
        <div className="contact-links">

          <a href='mailto:ananth.skp@gmail.com' target='_blank' rel='noreferrer'><img src={Gmail} alt="" /></a>

          <a href='https://www.linkedin.com/in/s-ananth-572280295/' target='_blank' rel='noreferrer'><img src={Linkedin} alt="" /></a>

        </div >

        <Button buttonText='Resume' buttonLInk={Resume} buttonSolid={false} />

      </div>

    </div>

  )
}

export default Contact