import React from 'react';
import IngredientList from './IngredientList';

export default class RecipeForm extends React.Component{

constructor(props){
super(props);
this.state={
    menuTitle: props.recipe ? props.recipe.menuTitle:'',
    steps: props.recipe ? props.recipe.steps:'',
    ingredient: props.recipe ? props.recipe.ingredient:'',
    checkbox:props.recipe ? props.recipe.checkbox: false,
    error:''
}

}
onMenuTitleChange=(e)=>{
 const menuTitle = e.target.value
 this.setState(()=>({menuTitle}))
}

onStepsChange =(e)=>{
 const steps = e.target.value
 this.setState(()=>({steps}))
}
onIngredientChange=(e)=>{
const ingredient = e.target.value;
this.setState(()=>({ingredient}));
}

handleSubmit= (e)=>{
e.preventDefault()
if(!this.state.menuTitle ){
this.setState(()=>({error:'please enter menu title'}))
} else{
    this.setState(()=>({errors:''}))
    this.props.onSubmit({
        menuTitle: this.state.menuTitle,
        steps: this.state.steps,
        ingredient: this.state.ingredient,
        checkbox: !this.state.checkbox
    })
}
}

render(){
    return(
    <div className='form'>
      {this.state.error && <p>{this.state.error}</p>}
     <form onSubmit={this.handleSubmit}>
         <input
         type='text'
         placeholder='menu name'
         value= {this.state.menuTitle}
         onChange ={this.onMenuTitleChange}
         ></input>
         <textarea
         type='text'
         placeholder='cooking steps'
         value={this.state.steps}
         onChange={this.onStepsChange}
         ></textarea>
        <h1>Ingredients</h1>
        <IngredientList />
        <input 
        type='text' 
        placeholder='add ingredient'
        value={this.state.ingredient}
        onChange={this.onIngredientChange}
        ></input>
        <button >Add Ingredient</button>
     </form>   
     
    </div>
    )
}
}