import React from 'react';
import "./Projects.css";
import ProjectCard from '../../components/cards/projectCard/projectCard';
import {Fade} from 'react-reveal';

const projects =()=>{
return(
  <Fade bottom duration={1000} distance="20px">
    <div className="container" id="projects">
     <div>
           <h1  className="heading">My Projects</h1>      
       </div>
    <div className="row">
    <div class="col col-lg-4">
      <ProjectCard />
    </div>
    <div className="col col-lg-4">
    <ProjectCard />
    </div>
    <div className="col col-lg-4">
    <ProjectCard />
    </div> 
    </div>
    </div>
    </Fade>
)
}

export default projects;