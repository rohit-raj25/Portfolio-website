import React from 'react';
import "./Experience.css";
import {Fade} from 'react-reveal';
import ExperienceCard from '../../components/cards/ExperienceCard/ExperienceCard';

const experience = (props) => {
    const  experience = [
      {
        role: "Software Developer Intern",  
        company: "Text Mercato",
        companylogo: require("../../assets/images/TMlogo.jpg"),
        date: "April 2021 – Sept 2021",
        // desc: "Working on Restaurant POS system",
        descBullets: [
          "Developed the website from scratch using Vue.js and Node.js and integrated several AI tools for product demo."
          // "Ensured only authorized employees have access to the application by validing requests through Auth0."
        ]
      },
      {
        role: "Web Development Intern",  
        company: "Dataphilics",
        companylogo: require("../../assets/images/dataphilics.png"),
        date: "Jan 2021 – April 2021",
        // desc: "Working on Restaurant POS system",
        descBullets: [
          "Built dynamic POS screen and well designed server side code for Restaurant Management System"
          // "Worked on the backend to develop REST APIs for checking in customers, booking table, placing order,and checkout for the staff using Node.js."
        ]
      },
      {
        role: "Front-end Developer Intern",  
        company: "Solera Life Sciences",
        companylogo: require("../../assets/images/solera-logo.png"),
        date: "Sept 2020 – Dec 2020",
        // desc: "Working on Restaurant POS system",
        descBullets: [
          "Worked on the front-end and built responsive web apps using React and Tailwind CSS"
          // "Worked on the backend to develop REST APIs for checking in customers, booking table, placing order,and checkout for the staff using Node.js."
        ]
      },

        ];
      
    return (
     
        <div className="main" id="experience">
        <Fade bottom duration={800} distance="20px">
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