import React from 'react';
import RecipeItem from './RecipeItem';
import selectRecipe from '../selctors/recipe';
import { connect } from 'react-redux';

export const RecipeList = (props)=>(
    props.recipes.length === 0?
    (<p>no recipes</p>):(
      props.recipes.map(recipe=>{
    return <RecipeItem key={recipe.id} {...recipe}/> }) 
    )
)

const mapStateToProps = (state)=>{
 return{
     recipes: selectRecipe(state.recipes, state.filters)
 }
}

export default connect(mapStateToProps)(RecipeList)