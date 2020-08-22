import React from 'react';
import RecipeList from './RecipeList';
import {Link} from 'react-router-dom';
import RecipeListFilter from './RecipeListFilter';

const Home =()=>{
    return (
        <div>
         <RecipeListFilter />
         <RecipeList /> 
         <button>
          <Link to='/create'>Add Recaipe</Link>
         </button>  
        </div>
    )
       
    
}

export default Home;