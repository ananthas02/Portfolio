import React from 'react';
import './button.scss';

const Button = ({buttonLInk, buttonText, buttonSolid = false, onClick= false}) => {
  return (
    buttonLInk ? 
    <a className={`button ${buttonSolid ? 'solid' : 'default'}`} href={buttonLInk} target='_blank' rel='noopener noreferrer'>{buttonText}</a>
    :
    <button className={`button ${buttonSolid ? 'solid' : 'default'}`} onClick={onClick ? onClick : ''}>
        {buttonText}
    </button>
  )
}

export default Button