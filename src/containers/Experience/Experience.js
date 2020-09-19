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
            desc: "Global-remote initiative by GirlScript Foundation ",
            descBullets: [
              "Worked on a project based on Node js",
              "Got familiar with open source contribution"
            ]
          },
          {
            role: "Marketing intern",   
            company: "Unschool",
            companylogo: require("../../assets/images/unschool.png"),
            date: "Dec 2019 – Jan 2020",
            desc: "Unschool is an e-mentorship company ",
            descBullets: [
                "Promoted Unschool in my campus",
                " Handled leads, conversion, and social media marketing"
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