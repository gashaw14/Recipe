import React from 'react';

const IngredientItem =({ingredient, checkbox})=>(
    <div className='checbox'>
      {ingredient && <label><input type='checkbox' />{ingredient}</label> } 
    </div>
)
export default IngredientItem;