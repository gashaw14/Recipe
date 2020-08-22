const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/recipe', {useNewUrlParser: true});
const recipeSchema = new mongoose.Schema({
  recipeName: String
});
const Recipe = mongoose.model('Recipe',recipeSchema);

const recipe1 = new Recipe({
  recipeName :'Kitfo'
})
const recipe2 = new Recipe({
  recipeName :'kikil'
})

const defaultRecipe = [recipe1, recipe2]

Recipe.insertMany(defaultRecipe, (e)=>{
if(e){
  console.log(e);
} else {
  console.log('sucessfully saved the recipe ');
}
})
app.get('/',(req,res)=>{
Recipe.find({},(e,recipe)=>{
console.log(recipe);
})
});
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is up!');
});
