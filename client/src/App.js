import React,{Suspense} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';

import Dashboard from './components/dashboard'
import Home from './components/home'
import Event from './components/event'
import Courses from './components/courses'
import Contact from './components/contact'
import Services from './components/services'

// const Home = React.lazy( ()=>import('./components/dashboard'))
// const Event=  React.lazy( ()=>import('./components/event'))
// const Courses=  React.lazy( ()=>import('./components/courses'))
// const Contact=  React.lazy( ()=>import('./components/contact'))
// const Services=  React.lazy( ()=>import('./components/services'))


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Dashboard/>
      <Suspense>
      <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/event" component={Event}></Route>
                <Route path="/courses" component={Courses}></Route>
                <Route path="/candidates/add" component={Contact}></Route>
                <Route path="/services" component={Services}></Route>
       </Switch>  
       </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
