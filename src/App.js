import React from 'react';
import './Style.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import News from './pages/News';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/shop' component={Shop} />
        <Route path='/news' component={News} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
