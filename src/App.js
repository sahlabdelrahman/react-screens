import React from 'react';
import { Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Report from './pages/Report';
import AddAccount from './pages/AddAccount';
import Subscription from './pages/Subscription';
import Blog from './pages/Blog';

function App() {
  return (
    <div>
         <Route exact path={'/'} component={Home} />
         <Route exact path={'/report'} component={Report} />
         <Route exact path={'/add-account'} component={AddAccount} />
         <Route exact path={'/subscription'} component={Subscription} />
         <Route exact path={'/blog'} component={Blog} />
    </div>
  );
}

export default App;
