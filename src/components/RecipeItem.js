import React from 'react';
import {Link} from 'react-router-dom';


const RecipeItem =({id,menuTitle,steps})=>(
    <div>
    <button>
    <Link to={`/edit/${id}`}>
    <h3>{menuTitle}</h3>
    <p>has ingredient</p>
    </Link>
    </button>
   
    </div>
)

export default RecipeItem;