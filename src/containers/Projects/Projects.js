import React from 'react';
import "./Projects.css";
import ProjectCard from '../../components/cards/projectCard/projectCard';
import emoji from "react-easy-emoji";
import {Fade} from 'react-reveal';

const projects =()=>{

  const projectSection = {

    title: emoji(" Projects 💻 "),
    subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",
  
    projectsCards: [
      {
        title: "Burger Builder",
        subtitle: "Single page application built with React,Redux, and React Router.",
        image: require("../../assets/images/burgerBuilder.png"),
        footerLink: [
          { name: "Github", url: "https://github.com/sonali-singh97/Burger-builder" },
          { name: "Final Project", url: "https://burger-builder-5c387.web.app/" },
         
        ]
      },
      {
        title: "Forkify",
        subtitle: "Recipe Finder app built with Javascript and Node.js",
        image: require("../../assets/images/undraw_logic_n6th.svg"),
        footerLink: [{ name: "Github", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }
        ,{ name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }]
      },
  
      {
        title: "Budgety",
        subtitle: "Budgeting app built with HTML ,CSS and Javascript",
        image: require("../../assets/images/Budgety.png"),
        footerLink: [
          { name: "Github", url: "https://github.com/sonali-singh97/Budgety" },
          { name: "Final Project", url: "https://sonali-singh97.github.io/Budgety/" }
        ]
      },

      {
        title: "To-Do list",
        subtitle: "Web application to manage tasks built with EJS, Node.js, Express.js.",
        image: require("../../assets/images/undraw_logic_n6th.svg"),
        footerLink: [
          { name: "Github", url: "" },
          { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
        ]
      }
    ]
  };
return(
  <Fade bottom duration={1000} distance="20px">
  <div className="projects-main" id="projects">
   <div className="project-main-div">
       <div className="project-header">
       <h1 className="heading project-heading">{projectSection.title}</h1>
       <p className="subTitle project-subtitle">{projectSection.subtitle}</p>
       </div>
    
    <div className="project-cards-div">
 
    {projectSection.projectsCards.map(card => {
         return (
             < ProjectCard 
             title={card.title}
             description = {card.subtitle}
             image= {card.image}
             footer= {card.footerLink}
             />
         );
       })}
    </div>


   </div>

  </div>
 </Fade>
)
}

export default projects;