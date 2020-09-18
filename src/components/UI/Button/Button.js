import React from 'react';

import './Button.css';

const button =(props) => {
return (<div className={props.className}>
    <a class="main-button" href={props.href} target={props.newTab && "_blank"}>
        {props.text}</a>
</div>)
}

export default button;