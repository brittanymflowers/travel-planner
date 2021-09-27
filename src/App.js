import './App.css';
import AllTrips from './components/AllTrips'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [trips, setTrips] = useState([
    {
      id: 1,
      location: 'Panama City',
      dates: '9/18/21 - 9/25/21',
      active: false,
    },
    {
      id: 2,
      location: 'San Antonio',
      dates: '10/22/21 - 10/25/21',
      active: true,
    },
    {
      id: 3,
      location: 'Paris',
      dates: '4/8/22 - 4/20/22',
      active: true,
    },
    {
      id: 4,
      location: 'Rome',
      dates: '5/8/22 - 5/20/22',
      active: true,
    },
  ])
  return (
    <div className="App">
      <Header />
      <AllTrips trips={trips}/>
    </div>
  );
}

export default App;
