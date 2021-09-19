//import { useEffect, useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';

import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </div>
  );
}

export default App;
