import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouters';
import {Provider} from 'react-redux';
import configStore from './store/configStore';
import {addRecipe} from './actions/recipe';
import visibelRecipe from './selctors/recipe';


const store = configStore();
store.dispatch(addRecipe({menuTitle:'vegiterian',steps:'here is the steps', ingredient:'Rice'}));
store.dispatch(addRecipe({menuTitle:'fish',steps:'how to cook fish',ingredient:'Pasta'}));
store.dispatch(addRecipe({menuTitle:'doro wot',steps:'how to cook dorowot',ingredient:'Fish'}));

const state = store.getState();
const recipe = visibelRecipe(state.recipes,state.filters);
console.log(recipe);
const jsx = (
    <div>
    <Provider store={store}>
    <AppRouter />
  </Provider>

    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));