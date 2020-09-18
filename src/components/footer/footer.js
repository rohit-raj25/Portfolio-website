import React from "react";
import './footer.css';
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

const footer= () => {

   return ( <Fade bottom duration={1000} distance="5px">
        <div className="footer-div">
        <p className="footer-text">{emoji("Made with ❤️ by Sonali Singh")}</p>
        </div>
        </Fade>)
}

export default footer;