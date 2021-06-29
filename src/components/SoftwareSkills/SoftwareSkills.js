import React from 'react';
import './SoftwareSkills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const softwareSkills = ()=> {

    const softwareSkills=[
        {
            skillName: "html-5",
            fontAwesomeClassname: ["fab", "html5"]
          },
          {
            skillName: "css3",
            fontAwesomeClassname: ["fab", "css3"]
          },
          {
            skillName: "sass",
            fontAwesomeClassname: ["fab", "sass"]
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: ["fab", "js"]
          },
          {
            skillName: "reactjs",
            fontAwesomeClassname: ["fab", "react"]
          }, 
          {
            skillName: "vuejs",
            fontAwesomeClassname: ["fab", "vuejs"]
          }, 
          {
            skillName: "nodejs",
            fontAwesomeClassname: ["fab", "node"]
          },
          {
            skillName: "npm",
            fontAwesomeClassname: ["fab", "npm"]
          },
          {
            skillName: "sql-database",
            fontAwesomeClassname: ["fas", "database"]
          },
          {
            skillName: "firebase",
            fontAwesomeClassname: ["fas", "fire"]
          },
          {
            skillName: "mongoDB",
            fontAwesomeClassname: ["fas", "database"]
          },
          {
            skillName : "figma",
            fontAwesomeClassname : ["fab" , "figma"]
          },
          {
            skillName : "Django",
            fontAwesomeClassname : ["fab" , "python"]
          }
    ]

    return (
        <div>
            <div className="software-skills">
                <ul className="dev-items">
                    {
                        softwareSkills.map(skills =>{
                            return (
                                <li className="software-skill-inline" key={skills.skillName}>
                                   <FontAwesomeIcon icon={skills.fontAwesomeClassname} className="icon"/> 
                                  <p>{skills.skillName}</p>
                                </li>
                            );
                            }
                            )
                    }

                </ul>

            </div>
        </div>
    )
}

export default softwareSkills;