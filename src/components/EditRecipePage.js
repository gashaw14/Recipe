import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import {editRecipe, removeRecipe} from '../actions/recipe';

export class EditRecipePage extends React.Component{
  onSubmit=(recipe)=>{
    this.props.editRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');

  }
  onClick=()=>{
    this.props.removeRecipe({id:this.props.recipe.id}) 
    this.props.history.push('/');  
  }
    render(){
        return(
            <div>
         <RecipeForm 
              recipe ={this.props.recipe}
              onSubmit={this.onSubmit}
          />  
          <button
          onClick={this.onClick}
          >remove</button>
            </div>
         
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        editRecipe:(id,recipe)=> dispatch(editRecipe(id, recipe)),
        removeRecipe:(data)=>dispatch(removeRecipe(data))
    }
}
const mapStateToProps = (state,props)=>{
return{
    recipe:state.recipes.find((recipe)=> recipe.id === props.match.params.id)
}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditRecipePage);