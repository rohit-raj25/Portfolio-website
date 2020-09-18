import React from 'react';
import "./Experience.css";
import {Fade} from 'react-reveal';
import ExperienceCard from '../../components/cards/ExperienceCard/ExperienceCard';

const experience = (props) => {
    const  experience = [
          {
            role: "Mentee",  
            company: "The Uplift Project",
            companylogo: require("../../assets/images/uplift.jpg"),
            date: "June 2020 – August 2020",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            descBullets: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
          },
          {
            role: "Marketing intern",   
            company: "Unschool",
            companylogo: require("../../assets/images/unschool.png"),
            date: "Dec 2019 – Jan 2020",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              ]
        }
        ];
      
    return (
     
        <div id="experience">
        <Fade bottom duration={1000} distance="20px">
      <div className="experience-container" id="workExperience">
          <div>
        <h1 className="experience-heading">Experiences</h1>
        <div className='experience-cards-div'>
         {experience.map((card)=>{
             return <ExperienceCard
             company= {card.company}
              desc= {card.desc}
               date = {card.date}
               companylogo = {card.companylogo}
                 role = {card.role}
                descBullets = {card.descBullets}
             />
            
         })
         }
        </div>
      </div>
      </div>
        </Fade>
        </div>
    );
}
export default experience;