import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import RecipeForm from '../../components/RecipeForm';

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

test('default recipe form',()=>{
    const wrapper = shallow(<RecipeForm />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('test recipe form with data',()=>{
    const wrapper = shallow(<RecipeForm recipe={recipes[1]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()

})

test('test invalid recipe form submision',()=>{
    const wrapper = shallow(<RecipeForm />);
    expect(toJSON(wrapper)).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
   expect(wrapper.state('error').length).toBeGreaterThan(0)
   expect(toJSON(wrapper)).toMatchSnapshot()
})

test('set menu input change recipe form',()=>{
    const value = 'new value'
    const wrapper = shallow(<RecipeForm />);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('menuTitle')).toBe(value)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
test('set step input change recipe form',()=>{
    const value = 'here are steps for recipe'
    const wrapper = shallow(<RecipeForm />);
    wrapper.find('textarea').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('steps')).toBe(value)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
test('test on submit form submission',()=>{
    const onSubmitSpy =  jest.fn();
    const wrapper = shallow(<RecipeForm recipe={recipes[1]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        menuTitle: recipes[1].menuTitle,
        steps: recipes[1].steps,
        ingredient: recipes[1].ingredient,
        checkbox: !recipes[1].checkbox
    })
})