import React from 'react';
import { Link } from 'react-router-dom';
import Skill from './Skill.css'

export default ({skill}) => (
    <div className="skill">
        <Link to="">
        {/* downloadUrl */}
            <img src="" alt=""/>
            <p>{skill.name}</p>
        </Link>
    </div>
);