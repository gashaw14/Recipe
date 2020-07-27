import {createStore,combineReducers} from 'redux';
import recipeReducer from '../reducer/recipe';
import filtersReducer from '../reducer/filters';

export default ()=>{
    const store = createStore(
        combineReducers({ 
            recipes:recipeReducer,
            filters: filtersReducer
        })
    )
    return store;
}
