import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import {editRecipe} from '../actions/recipe';

const EditRecipePage =(props)=>{
    return(
        <div>
       
          <RecipeForm
            recipe ={props.recipe}
            onSubmit={(recipe)=>{
             props.dispatch(editRecipe(props.recipe.id, recipe))
             props.history.push('/');
            }}
             />
        </div>
    )
}

const mapStateToProps = (state,props)=>{
return{
    recipe:state.recipes.find((recipe)=> recipe.id === props.match.params.id)
}
}

export default connect(mapStateToProps)(EditRecipePage);