import React from 'react';

const IngredientItem =({ingredient})=>(
    <div>
      {ingredient && <label><input type='checkbox' />{ingredient}<button>remove</button></label> } 
    </div>
)
export default IngredientItem;