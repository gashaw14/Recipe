import React from 'react';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipe';
import {connect} from 'react-redux';

export class AddRecipePage extends React.Component{
  onSubmit=(recipe)=>{
    this.props.addRecipe(recipe);
    this.props.history.push('/');
  }
  render(){
    return(
      <div>
      <h1>Add Recipe</h1>
      <RecipeForm
        onSubmit={this.onSubmit}
      />
    </div>
    )
  }
}

  const mapDispatchToProps =(dispatch)=>{
    return{
      addRecipe:(recipe)=> dispatch(addRecipe(recipe))
    }
  }
  export default connect(undefined,mapDispatchToProps)(AddRecipePage);
  