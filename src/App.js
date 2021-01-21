import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Article from './components/Article';
import data from './components/data';

export default function App() {

  return (
    <div className="app">
      <Switch>
        <Route exact path="/article/:articleId">
          <Article data={data}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
      <footer>
        <p><a href="https://camlab.fas.harvard.edu/" target="_blank" rel="noreferrer noopener">INFO</a></p>
        <p>2020 &copy; Harvard FAS Chinese Art Media Lab</p>
      </footer>
    </div>
  );
}
