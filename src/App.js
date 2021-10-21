import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './assets/css/main.css'
import './assets/css/media.css'
import RouteHandler from './controller/RouteHandler'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Switch>
      <RouteHandler/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default App;
