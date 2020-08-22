import {addRecipe,removeRecipe,editRecipe} from '../../actions/recipe';

test('remove recipe',()=>{
const action = removeRecipe({id:'1233'});
expect(action).toEqual({
    type: 'REMOVE_RECIPE',
    id:'1233'
})
})

test('edit recipe',()=>{
    const action = editRecipe('1234','hello');
    expect(action).toEqual({
        type: 'EDIT_RECIPE',
        id: '1234',
        update: 'hello'
    })
})

test('add recipe',()=>{
    const recipeData = {
        menuTitle:'vegi',
        steps:'cook',
        ingredient:'rice', 
        checkbox:false
    }
    const action = addRecipe(recipeData);
    expect(action).toEqual({
        type:'ADD_RECIPE',
        recipe:{
            ...recipeData,
            id: expect.any(String)

        }
       
    })
})
test('add recipe',()=>{

    const action = addRecipe();
    expect(action).toEqual({
        type:'ADD_RECIPE',
        recipe:{
            id: expect.any(String),
            menuTitle:'',
            steps:'',
            ingredient:'', 
            checkbox:false
        }
       
    })
})