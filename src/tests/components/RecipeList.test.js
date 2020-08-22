import React from 'react';
import {shallow} from 'enzyme';
import {RecipeList} from '../../components/RecipeList';
import toJSON from 'enzyme-to-json';

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

test('recipe list component',()=>{
    const wrapper = shallow(<RecipeList recipes={recipes}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('no recipe list',()=>{
    const wrapper = shallow(<RecipeList recipes={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

})