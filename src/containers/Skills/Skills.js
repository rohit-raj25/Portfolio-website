import React from 'react';
import './Skills.css';
import {Fade} from "react-reveal";
import SoftwareSkills from '../../components/SoftwareSkills/SoftwareSkills';
import webImg from '../../assets/images/undraw_logic_n6th.svg';
import emoji from "react-easy-emoji";
const skills = (props) => {
return (
    <div className="main" id="skills">
   <div className="main-skills"> 
      <Fade left duration={1000}>
    <div className="skills-image-div">
     <img  alt="Sonali Working" src={webImg} />
    </div>
    </Fade>

    <Fade right duration={1000}>
      <div className="skills-text-div">
      <h1 className="skills-heading">What i am good at </h1>
      <p className="subTitle skills-text-subtitle">{emoji("CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK 😎" )}
      </p>
      <SoftwareSkills />
      </div>
    </Fade>
    </div>
   </div>
)
}

export default skills;