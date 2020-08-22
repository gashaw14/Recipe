import React from 'react';
import {shallow} from 'enzyme';
import RecipeItem from '../../components/RecipeItem';
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
test('test recipe item component',()=>{
    const wrapper = shallow(<RecipeItem {...recipes[1]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})