import React from 'react';
import "./Summary.css";
import Button from '../../components/UI/Button/Button';
import webImage from '../../assets/images/undraw_web_development_w2vv.svg';
import SocialMedia from "../../components/socialMedia/SocialMedia";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

const summary = () => {
return (
  <Fade bottom duration={1000} distance="40px">
   <div className = "greet-main">
       <div className="greeting-main">
       <div className="greeting-text-div">
       <div>
           <h1  className="greeting-text">Hi all, I'm Sonali
           <span className="wave-emoji">{emoji("👋")}</span>
           </h1>
           
       </div>
    <p className="greeting-text-p subtitle">
         {emoji("A passionate Web Developer 🚀 having knowledge of web technologies like  JavaScript , Reactjs and Nodejs .")}
         </p>
    <SocialMedia />

    <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href="https://drive.google.com/file/d/1CZalW2g8DcOvg9FOIpJAhknRDuF5onXY/view?usp=sharing" />
            </div>
            </div>
           
 <div className="greeting-image-div">
 <img alt="Sonali working on laptop." src={webImage}></img>
 </div>
 </div>
   </div>
  </Fade > 
);
}

export default summary;