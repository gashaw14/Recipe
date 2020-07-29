import React from 'react';
import IngredientItem from './IngredientItem';
import selectRecipe from '../selctors/recipe';
import { connect } from 'react-redux';

const IngredientList = (props)=>(
<div>
 {props.recipes.map(recipe=>{
     return <IngredientItem  key={recipe.id} {...recipe} />
     }
     
     )}
     
     
</div>
)
  

const mapStateToProps = (state)=>{
 return{
     recipes: selectRecipe(state.recipes, state.filters)
 }
}

export default connect(mapStateToProps)(IngredientList)