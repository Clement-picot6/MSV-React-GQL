import React from 'react';
import { Link } from 'react-router-dom';

export default ({theme}) => (
    <div className="item">
    <Link to="/allSkillCategories">
    {/* downloadUrl */}
        <img src="" alt=""/>
        <p>{theme.name}</p>
    </Link>
    </div>
);