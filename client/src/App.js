import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';

import Dashboard from './components/dashboard'
import Home from './components/home'
import Event from './components/event'
import Courses from './components/courses'
import Contact from './components/contact'
import Services from './components/services'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Dashboard/>
      <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/event" component={Event}></Route>
                <Route path="/courses" component={Courses}></Route>
                <Route path="/candidates/add" component={Contact}></Route>
                <Route path="/services" component={Services}></Route>
       </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
