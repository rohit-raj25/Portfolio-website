import React from 'react';
import './Achievements.css';
import AchievementCard from '../../components/cards/AchievementCard/AchievementCard';
import emoji from "react-easy-emoji";
import {Fade} from 'react-reveal';

const achievements =()=> {

    const achievementSection = {

        title: emoji("Achievements And Certifications 🏆 "),
        subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",
      
        achivementsCards: [
          {
            title: "Microsoft Certified: Azure Fundamentals",
            subtitle: "Earned the Azure Fundamentals certification by successfully clearing AZ-900 exam.",
            image: require("../../assets/images/azure-certificate.png"),
            footerLink: [
              { name: "Certification", url: "https://www.credly.com/badges/131ed0a0-dce9-444a-b7d4-fd53d32fecb2/public_url" },
            ]
          },
          {
            title: "Winner at KU HackFest 2021",
            subtitle: "Won the prize for 'Best Use of Github Students Pack'",
            image: require("../../assets/images/KUhackfest.png"),
            footerLink: [
              // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
              { name: "Devfolio", url: "https://devfolio.co/submissions/tagonizer-a34c" }
            ]
          },
          {
            title: "Member of DSC UIET",
            subtitle: "Worked to conduct workshops, seminars, and coding events for students.",
            image: require("../../assets/images/DSC.jpg"),
            footerLink: [
              { name: "Certificate", url: "https://drive.google.com/file/d/1mvDWmqYuxQmnaaMX9HOOhMFZEt9o-pMO/view?usp=sharing" },
            ]
          },
          {
            title: "Open Source Contributor ",
            subtitle: "Contributed to the Feminist Bible Project(MERN Stack) in the Girlscript Summer of Code",
            image: require("../../assets/images/GSSoc.png"),
               footerLink: [
              { name: "Github", url: "https://github.com/girlscript/feminist-bible-phase-2" },
            ]
          },
          {
            title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            subtitle: "Learned about client-side web UI frameworks, CSS preprocessors, Node.js, and task runners like Grunt and Gulp.",
            image: require("../../assets/images/web-dev.png"),
            footerLink: [{ name: "Certificate",
             url: "https://coursera.org/share/fdf1b20bbb6a1280aa48f4f99e8f8983" }]
          },
          {
            title: "UI/UX Design ",
            subtitle: "Completed 6-week training of UI design from Internshala and learned about Design systems, Wireframing, and Figma Tool.",
            image: require("../../assets/images/UI design.svg"),
            footerLink: [{ name: "Certificate",
             url: "https://trainings.internshala.com/view_certificate/EE2AA6B8-08F3-872F-BE4C-138E5FE03191/5E6F5CFE-112B-A058-5478-19B84464C45B" }]
          },
      
          // {
          //   title: "Intro to CPP ",
          //   subtitle: "Completed 1 month course from coding ninjas",
          //   image: require("../../assets/images/cn.png"),
          //   footerLink: [
          //     { name: "Certification", 
          //     url: "https://ninjasfiles.s3.amazonaws.com/certificate320726a77620a6dd36a4b83f3174cca07a79ac.pdf" },
             
          //   ]
          // }
        ]
      };

return (
    <Fade bottom duration={800} distance="20px">
     <div className="main" id="achievements">
      <div className="achievement-main-div">
          <div className="achievement-header">
          <h1 className="heading achievement-heading">{achievementSection.title}</h1>
          <p className="subTitle achievement-subtitle">{achievementSection.subtitle}</p>
          </div>
       
       <div className="achievement-cards-div">
    
       {achievementSection.achivementsCards.map(card => {
            return (
                <AchievementCard 
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

export default achievements;