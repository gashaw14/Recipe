import React from 'react';
import {Link} from 'react-router-dom';


const RecipeItem =({id,menuTitle,ingredient})=>(
    <div>
    <button>
    <Link to={`/edit/${id}`}>
    <h3>{menuTitle}</h3>
    <p>{ingredient}</p>
    </Link>
    </button>
   
    </div>
)

export default RecipeItem;