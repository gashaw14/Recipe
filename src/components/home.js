import React from 'react';
import RecipeList from './RecipeList';
import {Link} from 'react-router-dom';

const Home =()=>{
    return (
        <div>
         <RecipeList /> 
         <button>
          <Link to='/create'>Add Recipe</Link>
         </button>  
        </div>
    )
       
    
}

export default Home;