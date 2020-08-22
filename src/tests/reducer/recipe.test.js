import recipeReducer from '../../reducer/recipe';


const recipes =[{
    id:'1',
    menuTitle:'VEGI', 
    steps:'ttt',
    ingredient:'aaa',
    checkbox:false

},{
   id:'2',
    menuTitle:'meat', 
    steps:'cook',
    ingredient:'yyyy',
    checkbox:false
}
]
test('set default state',()=>{
const state = recipeReducer(undefined,{type:'@@INIT'});
expect(state).toEqual([]);
})

test('add recipe',()=>{
    const recipe = {
        id:'3',
        menuTitle:'fish', 
        steps:'fff',
        ingredient:'dddd',
        checkbox:false
    }
    const action = {
        type: 'ADD_RECIPE',
        recipe
    }
    const state = recipeReducer(recipes,action);
    expect(state).toEqual([...recipes,recipe])
}
)

test('remove recipe',()=>{
    const action = {
        type: 'REMOVE_RECIPE',
        id: recipes[0].id
    }
    const state = recipeReducer(recipes,action);
    expect(state).toEqual([recipes[1]])
})

test('edit recipe',()=>{
    const action = {
        type: 'EDIT_RECIPE',
        id: recipes[0].id,
        update:{
        menuTitle: 'firfir'
        }
    }
    const state = recipeReducer(recipes,action);
    expect(state[0].menuTitle).toBe('firfir')
})