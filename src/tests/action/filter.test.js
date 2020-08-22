import {setTextFilter} from '../../actions/filters';

test('set filter',()=>{
    const action = setTextFilter('gashaw');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : 'gashaw'
    });
})

test('set text default',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:''
    })
})