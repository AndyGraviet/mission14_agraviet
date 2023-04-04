import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieCollection from './Pages/MovieCollection';

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/MovieCollection">
            <MovieCollection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
