import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Settings from './components/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/header" component={ Header } />
      <Route exact path="/settings" component={ Settings } />
    </Switch>
  );
}
