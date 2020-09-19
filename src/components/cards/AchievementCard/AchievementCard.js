import React from 'react';
import './AchievementCard.css';

const achievementCard= (props) => {

    function openUrlInNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
      }

return (
    <div className="certificate-card">
  <div className="certificate-image-div">
   <img src={props.image} alt="certificate" className="card-image" />
  </div>

  <div className="certificate-detail-div" >
  <h5 className="card-title">{props.title}</h5>
   <p className="card-subtitle">{props.description}</p>
  </div>

  <div className="certificate-card-footer" >
  {props.footer!=null ?props.footer.map((v, i) => {
            return <span class="certificate-tag" onClick={() => openUrlInNewTab(v.url)}>{v.name}</span>;
          }) : null}
  </div>
    </div>


)
}

export default achievementCard;