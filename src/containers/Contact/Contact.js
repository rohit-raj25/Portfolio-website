import React from "react";
import "./Contact.css";
import emoji from "react-easy-emoji";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {Fade} from "react-reveal";

const Contact=()=>{
    const contactInfo = {
        title: emoji("Contact Me 📞"),
        subtitle: "GOT AN INTERESTING PROJECT TO WORK ON? OR JUST WANNA HANGOUT OVER A COFFEE. LET ME KNOW WHEN AND WHERE",
        address: "Gurgaon, Haryana",
        email_address: "sonali122000@gmail.com"
      };

return(
    <Fade bottom duration={1000} distance="20px">
   <div className="main contact-margin-top" id="contact">
        
                <div className="contact-header">
                    <h1 className="heading contact-title">{contactInfo.title}</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

                    <div className="contact-text-div">
                        <p className="contact-detail" >{contactInfo.address}</p>
                        <br/><br/>
                        <a className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>
            
        </div>
    </Fade>
)
}

export default Contact;