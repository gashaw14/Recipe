import React from 'react';
import {shallow, ReactWrapper} from 'enzyme';
import { AddRecipePage} from '../../components/AddRecipe';
import toJSON from 'enzyme-to-json';

let addRecipe, history, wrapper;
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

beforeEach(()=>{
    addRecipe = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<AddRecipePage addRecipe={addRecipe} history={history}/>);
})
test('test render add recipe component',()=>{
expect(toJSON(wrapper)).toMatchSnapshot()

})
test('test handle onSubmit',()=>{
    wrapper.find('RecipeForm').prop('onSubmit')(recipes[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(addRecipe).toHaveBeenCalledWith(recipes[0]);
})


