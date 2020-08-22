import selectRecipe from '../../selctors/recipe';

const recipe =[{
    id:'1',
    menuTitle:'VEGI', 
    steps:'ttt',
    ingredient:'aaa' 
},{
   id:'2',
    menuTitle:'meat', 
    steps:'cook',
    ingredient:'yyyy' 
}

]
test('fiter by text',()=>{
 const filter = {
   text:'m'
 }
const result = selectRecipe(recipe,filter);
expect(result).toEqual([recipe[1]])
}
);