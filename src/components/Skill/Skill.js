import React from 'react';
import { Link } from 'react-router-dom';
import Skill from './Skill.css'

function handleClick(e) {
    e.preventDefault();
}


export default ({skill}) => (
    <div className="skill">
    <Link to="#">
    {/* downloadUrl */}
    <img src={`${ skill.Icon ? skill.Icon.downloadUrl : null }`} alt="" onClick={handleClick}/>
    <p>{skill.name}</p>
    </Link>
    </div>
);