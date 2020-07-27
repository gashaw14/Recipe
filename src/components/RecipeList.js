import React from 'react';
import RecipeItem from './RecipeItem';
import selectRecipe from '../selctors/recipe';
import { connect } from 'react-redux';

const RecipeList = (props)=>(
<div>
 {props.recipes.map(recipe=>{
     return <RecipeItem key={recipe.id} {...recipe}/> })}

</div>)
  

const mapStateToProps = (state)=>{
 return{
     recipes: selectRecipe(state.recipes, state.filters)
 }
}

export default connect(mapStateToProps)(RecipeList)