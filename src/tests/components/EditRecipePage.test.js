import React from 'react';
import {shallow, ReactWrapper} from 'enzyme';
import { EditRecipePage} from '../../components/EditRecipePage';
import toJSON from 'enzyme-to-json';

let editRecipe,removeRecipe, history, wrapper;
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
    editRecipe = jest.fn();
    removeRecipe = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<EditRecipePage 
    editRecipe={editRecipe} 
    removeRecipe={removeRecipe} 
    history={history}
    recipe = {recipes[0]}
    />);
    
})
test('test render edit recipe component',()=>{
expect(toJSON(wrapper)).toMatchSnapshot()

})
test('test handle onSubmit',()=>{
    wrapper.find('RecipeForm').prop('onSubmit')(recipes[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editRecipe).toHaveBeenCalledWith(recipes[0].id,recipes[0] );

})
test('test handle removeRecipe', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeRecipe).toHaveBeenLastCalledWith({
    id: recipes[0].id
  });
});
