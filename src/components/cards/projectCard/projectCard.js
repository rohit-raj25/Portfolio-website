import React from "react";
import "./projectCard.css";
import projectImg from '../../../assets/images/Screenshot (37).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function projectCard (){
return (<div className="project__card">
<img src={projectImg} alt="project screenshot" claasName="project__img" />
<h3>PROJECT Title</h3>
<p>
    giuogikln gugu gugkh hihl.
    jjkgjkjkhklh hhkhkl hkjhk.
</p>
<div className="card__footer">
<FontAwesomeIcon icon={["fab" , "github"]} className="icon"/>
<FontAwesomeIcon icon={["fas" , "external-link-alt"]} className="icon"/>
</div>
</div>)

}

export default projectCard;