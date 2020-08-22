import filterReducer from '../../reducer/filters';

test('text filter',()=>{
    const text = 'this is the text value'
    const action = {
        type:'SET_TEXT_FILTER',
        text
    }
    const state = filterReducer(undefined,action);
    expect(state.text).toBe(text)
}
)

test('default filter value',()=>{
const state = filterReducer(undefined, {type:'@@INIT'});
expect(state).toEqual({text:''})
})