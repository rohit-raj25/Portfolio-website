import React from "react";
import "./TopUp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const topUp =() => {
    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

      function scrollFunction () {
          if(document.body.scrollTop>20 || document.documentElement.scrollTop>20)
            {
                document.getElementById("topButton").style.visibility = "visible";
              }
          else {
            document.getElementById("topButton").style.visibility = "hidden";
          }
      }

      window.onscroll = function () {
        scrollFunction();
      };
      window.onload = function () {
        scrollFunction();
      };

      return(
          <button  type="button" id="topButton" title="Go to top" onClick={TopEvent} >
     <FontAwesomeIcon icon={["fas" , "hand-point-up"]}/>
          </button>

      );
}

export default topUp;