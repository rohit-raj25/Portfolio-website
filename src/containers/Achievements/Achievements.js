import React from 'react';
import './Achievements.css';
import AchievementCard from '../../components/cards/AchievementCard/AchievementCard';
import emoji from "react-easy-emoji";
import {Fade} from 'react-reveal';

const achievements =()=> {

    const achievementSection = {

        title: emoji("Achievements And Certifications 🏆 "),
        subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
      
        achivementsCards: [
          {
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("../../assets/images/undraw_logic_n6th.svg"),
            footerLink: [
              { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
              { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
              { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
            ]
          },
          {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("../../assets/images/undraw_logic_n6th.svg"),
            footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
          },
      
          {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("../../assets/images/undraw_logic_n6th.svg"),
            footerLink: [
              { name: "Certification", url: "" },
              { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
            ]
          }
        ]
      };

return (
    <Fade bottom duration={1000} distance="20px">
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