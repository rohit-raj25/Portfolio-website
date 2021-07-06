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
        title: "GyneConnect",
        subtitle: "A website where women can feel secure when finding trustworthy gynecologists in their area and book appointments with them. ",
        image: require("../../assets/images/GyneConnect.jpeg"),
        footerLink: [
          { name: "Github", url: "https://github.com/sonali-singh97/GyneConnect" },
          { name: "Final Project", url: "https://gyne-connect.herokuapp.com/" },
         
        ]
      },
      {
        title: "Pathshala",
        subtitle: "A web based platform to automate school administrative tasks along with managing all the resources and information at a single place. ",
        image: require("../../assets/images/school.png"),
        footerLink: [
          { name: "Github", url: "https://github.com/sonali-singh97/Pathshala" },
          { name: "Final Project", url: "https://vps-bihar.herokuapp.com/" },
         
        ]
      },
      {
        title: "Tagonizer",
        subtitle: "A Chrome Extension for Amazon to classify product reviews and generate tags from them",
        image: require("../../assets/images/logo.png"),
        footerLink: [
          { name: "Github", url: "https://github.com/sonali-singh97/Tagonizer-2" },
          // { name: "Final Project", url: "https://burger-builder-5c387.web.app/" },
         
        ]
      },
      {
        title: "Talk Amigo",
        subtitle: "A full-stack social media application built using Node.js serving a REST API with React as the frontend.",
        image: require("../../assets/images/talkAmigo.jpeg"),
        footerLink: [
          { name: "Github", url: "https://github.com/sonali-singh97/talk-amigo" },
          // { name: "Final Project", url: "https://burger-builder-5c387.web.app/" },
         
        ]
      },
      {
        title: "Burger Builder",
        subtitle: "Single page application built with React,Redux, and React Router.",
        image: require("../../assets/images/Builder.png"),
        footerLink: [
          { name: "Github", url: "https://github.com/sonali-singh97/Burger-builder" },
          { name: "Final Project", url: "https://burger-builder-5c387.web.app/" },
         
        ]
      },
      {
        title: "Budgety",
        subtitle: "Budgeting app built with HTML ,CSS and Javascript",
        image: require("../../assets/images/Budgety.png"),
        footerLink: [
          { name: "Github", url: "https://github.com/sonali-singh97/Budgety" },
          { name: "Final Project", url: "https://sonali-singh97.github.io/Budgety/" }
        ]}
      // ,

      // {
      //   title: "To-Do list",
      //   subtitle: "Web application to manage tasks built with EJS, Node.js, Express.js.",
      //   image: require("../../assets/images/To Do.png"),
      //   footerLink: [
      //     { name: "Github", url: "https://github.com/sonali-singh97/To-Do-list" },
      //     { name: "Final Project", url: "/" }
      //   ]
      // }
    ]
  };
return(
  <Fade bottom duration={1000} distance="20px">
  <div className="main" id="projects">
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