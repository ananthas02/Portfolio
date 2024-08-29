import React from 'react';
import './skills.scss';
import Html from '../../assets/Logo/html.svg';
import Tailwind from '../../assets/Logo/tailwind.svg';
import Css from '../../assets/Logo/css.svg';
import Jquery from '../../assets/Logo/jquery.svg';
import ReactJs from '../../assets/Logo/reactjs.svg';
import Js from '../../assets/Logo/javascript.svg';
import Github from '../../assets/Logo/github.svg';

const Skills = () => {
  const skills = [
    {
      name: 'Html',
      icon_src: Html
    },
    {
      name: 'Tailwind css',
      icon_src: Tailwind
    },
    {
      name: 'Css',
      icon_src: Css
    },
    {
      name: 'Javascript',
      icon_src: Js
    },
    {
      name: 'Jquery',
      icon_src: Jquery
    },
    {
      name: 'React js',
      icon_src: ReactJs
    },
    {
      name: 'Github',
      icon_src: Github
    }
  ]
  return (
    <div className='page skills' name='Skills'>

      <div className="bg-image"></div>

      <div className="container">

      <h2>Skills</h2>

        <ul className="skill-info">

          { skills?.map(({name, icon_src}, index)=> 
          
            <li key={index}>
              
              <div>
              
                <img src={icon_src} alt={name} />

              </div>
              
              <p>{name}</p>

            </li>
            
          )}
            
            
        </ul>

      </div>
      
    </div>

  )

}

export default Skills