

export default (recipes,{text})=>{
 return recipes.filter(recipe=>{
     const textMatch = recipe.menuTitle.toLowerCase().includes(text.toLowerCase());
     return textMatch;
 });
}