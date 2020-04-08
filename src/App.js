import React from 'react';
import './App.css';

import HomePage from './Components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GetAppointment from './Components/GetAppointment/GetAppointment';
import ViewAppointment from './Components/ViewAppointment/ViewAppointment';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';


function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Router>
        <Switch>
          <Route path="/getAppointment">
            <GetAppointment />
          </Route>
          <Route path="/appointment">
            <ViewAppointment />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router> */}

    </div>
  );
}

export default App;
