import React from 'react';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipe';
import {connect} from 'react-redux';


const AddRecipePage = (props) => (
    <div>
      <h1>Add Expense</h1>
      <RecipeForm
        onSubmit={(recipe) => {
          props.dispatch(addRecipe(recipe));
          props.history.push('/');
        }}
      />
    </div>
  );
  
  export default connect()(AddRecipePage);
  