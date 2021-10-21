import './App.css';
import AllTrips from './components/AllTrips';
import Header from './components/Header';
import { useState } from 'react';
import TripsState from './State/TripsState';
import TripDetails from './components/TripDetails';
import PackingList from './components/PackingList';
import ToDoList from './components/ToDoList';
import Agenda from './components/Agenda';

import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [trips, setTrips] = useState(TripsState)
  const [selectedTrip, setSelectedTrip] = useState({})

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => <AllTrips trips={trips} setTrips={setTrips} selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip}/>} />
          <Route path={"/" + selectedTrip.id} exact render={() => <TripDetails selectedTrip={selectedTrip}/>} />
          <Route path={"/" + selectedTrip.id + "/packinglist"} render={() => <PackingList selectedTrip={selectedTrip}/>} />
          <Route path={"/" + selectedTrip.id + "/todolist"} render={() => <ToDoList selectedTrip={selectedTrip} />} />
          <Route path={"/" + selectedTrip.id + "/agenda"} render={() => <Agenda selectedTrip={selectedTrip} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
