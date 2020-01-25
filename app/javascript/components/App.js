import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Academy from './Academy';
import Shop from './Shop';
import NotFound from './NotFound';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/academy" component={Academy} />
        <Route exact path="/shop" component={Shop} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
