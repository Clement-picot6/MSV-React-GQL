import React from 'react';
import { Link } from 'react-router-dom';

export default ({theme}) => (
    <div className="item">
    <Link to="">
    {/* downloadUrl */}
        <img src=""/>
        <p>{theme.name}</p>
    </Link>
    </div>
);