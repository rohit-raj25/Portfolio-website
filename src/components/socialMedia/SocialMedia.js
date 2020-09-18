import React from "react";
import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialMedia =()=>{
    const socialMediaLinks = {

        github: "https://github.com/saadpasta",
        linkedin: "https://www.linkedin.com/in/saadpasta/",
        gmail: "sonali122000@gmail.com",
        twitter : ""
         
      };
return(
    <div className='social-media-div'>
     <a href={socialMediaLinks.github} className="icon-button github" target="_blank">
     <FontAwesomeIcon icon={["fab","github"]} className="icons" /> 
        
      </a>

      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
        <FontAwesomeIcon icon={["fab","linkedin-in"]}  className="icons" /> 
      
      </a>

      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank">
        <FontAwesomeIcon icon={["fab","google"]}  className="icons" />  
        
      </a>

      <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank">
        <FontAwesomeIcon icon={["fab","twitter"]}  className="icons" />  
        
      </a>

    </div>
)
}

export default socialMedia;