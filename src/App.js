import './App.css';
import AllTrips from './components/AllTrips';
import Header from './components/Header';
import { useState } from 'react';
import TripState from './components/TripState';
import TripDetails from './components/TripDetails';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [trips, setTrips] = useState(TripState)
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => <AllTrips trips={trips} setTrips={setTrips}/>} />
          {/* <Route path={"/" + trips.id}> */}
          <Route path="/id" component={TripDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
