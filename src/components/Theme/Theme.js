import React from 'react';
import { Link } from 'react-router-dom';

export default ({theme}) => (
    <div className="item">
    <Link to={`/themes/${theme.code}/categories`}>
    {/* downloadUrl */}
        <img src="" alt=""/>
        <p>{theme.name}</p>
    </Link>
    </div>
);