import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category.css';

export default ({category}) => (
    <div className="itemCategory">
    <Link to={`/categories/${category.code}/skills`}>
        <img src="" alt=""/>
        <p>{category.name}</p>
    </Link>
    </div>
);