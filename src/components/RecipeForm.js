import React from 'react';


export default class RecipeForm extends React.Component{

constructor(props){
super(props);
this.state={
    menuTitle: props.recipe ? props.recipe.menuTitle:'',
    steps: props.recipe ? props.recipe.steps:'',
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
handleSubmit= (e)=>{
e.preventDefault()
if(!this.state.menuTitle ){
this.setState(()=>({error:'please entet menu title and cooking steps'}))
} else{
    this.setState(()=>({errors:''}))
    this.props.onSubmit({
        menuTitle: this.state.menuTitle,
        steps: this.state.steps
    })
}
}
render(){
    return(
    <div>
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
         <button>Save</button>
     </form>   
    </div>
    )
}


}