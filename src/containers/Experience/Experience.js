import React from 'react';
import "./Experience.css";
import {Fade} from 'react-reveal';
import ExperienceCard from '../../components/cards/ExperienceCard/ExperienceCard';

const experience = (props) => {
    const  experience = [
      {
        role: "Full Stack Developer Intern",  
        company: "Text Mercato",
        companylogo: require("../../assets/images/TMlogo.jpg"),
        date: "April 2021 – Present",
        // desc: "Working on Restaurant POS system",
        descBullets: [
          "Developed product pages for a SaaS website(Vue.js) where client can interact with product APIs and get respective output",
          "Used Ant Design Vue to build user interface"
        ]
      },
      {
        role: "Web Development Intern",  
        company: "Dataphilics",
        companylogo: require("../../assets/images/dataphilics.png"),
        date: "January 2021 – April 2021",
        // desc: "Working on Restaurant POS system",
        descBullets: [
          "Developed the POS screen using React for Restaurant Management System  ",
          "Worked on the Node.js backend to develop features like check-in, place order, book table and checkout"
        ]
      },

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