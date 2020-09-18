import React, {useState,createRef} from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";


export default function ExperienceCard (props){
      const [colorArrays, setColorArrays]= useState([]);
     const imgRef= createRef();
  
     function getColorArrays (){
         const colorThief = new ColorThief();
         setColorArrays(colorThief.getColor(imgRef.current));
     }

   function rgb (values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
   }

   const GetDescBullets= ({descBullets})=>{
    return descBullets ? descBullets.map((item) => <li className="subTitle">{item}</li>) : null;
   }

return (
<div className="experience-card">
<div style={{background: rgb(colorArrays) }} className="experience-banner">
<div className="experience-blurred-div" ></div>
<div className="experience-div-company">
<h5 className="experience-text-company" >{props.company}</h5>
</div>

<img crossOrigin="anonymous"  ref={imgRef} className="experience-roundedimg" src={props.companylogo} alt={props.company}
 onLoad={() => getColorArrays()} />
</div>

<div className="experience-text-details">
<h5 className="experience-text-role">{props.role}</h5>
<h5  className="experience-text-date">{props.date}</h5>
<p className='subtitle experience-text-desc'>{props.desc}</p>
<ul>
    <GetDescBullets descBullets= {props.descBullets} />
</ul>
</div>
</div>


    )

}

