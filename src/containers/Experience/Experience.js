import React from 'react';
import "./Experience.css";
import {Fade} from 'react-reveal';
import ExperienceCard from '../../components/cards/ExperienceCard/ExperienceCard';

const experience = (props) => {
    const  experience = [
      {
        role: "Web Development Intern",  
        company: "Dataphilics",
        companylogo: require("../../assets/images/dataphilics.png"),
        date: "January 2020 – Present",
        desc: "Working on Restaurant POS system",
        descBullets: [
          "Developed React ticketing system for ML model",
          
           
        
        ]
      },
      {
        role: "Frontend Developer",  
        company: "Solera Life Sciences Private Limited",
        companylogo: require("../../assets/images/solera-logo.png"),
        date: "September 2020 – December 2020",
        desc: "Worked on the company website for 3 months",
        descBullets: [
          "Contributed to the frontend part of the MeraRx website built using React",
          "Got to know about advanced React concepts"
           
        
        ]
      }
   
      //     {
      //       role: "Mentee",  
      //       company: "The Uplift Project",
      //       companylogo: require("../../assets/images/uplift.jpg"),
      //       date: "June 2020 – August 2020",
      //       desc: "Global-remote initiative by GirlScript Foundation ",
      //       descBullets: [
      //         "Worked on a project based on Node js",
      //         "Got familiar with open source contribution"
      //       ]
      //     },
      //     {
      //       role: "Marketing intern",   
      //       company: "Unschool",
      //       companylogo: require("../../assets/images/unschool.png"),
      //       date: "Dec 2019 – Jan 2020",
      //       desc: "Unschool is an e-mentorship company ",
      //       descBullets: [
      //           "Promoted Unschool in my campus",
      //           " Handled leads, conversion, and social media marketing"
      //         ]
      //   }
        ];
      
    return (
     
        <div className="main" id="experience">
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