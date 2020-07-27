
import React from 'react';
import Home from '../components/home';
import AddRecipePage from '../components/AddRecipe';
import EditRecipePage from '../components/EditRecipePage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/create" component={AddRecipePage} />
          <Route path="/edit/:id" component={EditRecipePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;