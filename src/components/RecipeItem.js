import React from 'react';
import {Link} from 'react-router-dom';


const RecipeItem =({id,menuTitle,checkbox})=>(
    <div>
    <button className='big-button'>
    <Link to={`/edit/${id}`}>
    <h3>{menuTitle}</h3>
    <p>{checkbox && 'It has Ingredien'}</p>
    </Link>
    </button>
   
    </div>
)

export default RecipeItem;