import './App.css'
import { Home } from './Components/Home.js';
import { MountainInfo } from './Components/MountainInfo';
import { NationalParks } from './Components/NationalParks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
  from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <ul>
            <li> <Link to="/">Home </Link></li>
            <li> <Link to="/">National Parks </Link></li>
            <li> <Link to="/">Mountain Information </Link></li>

          </ul>
        </nav>


        <header className="App-header">


        </header>
        <Routes>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/MountainInfo">
            <MountainInfo />
          </Route>
          <Route path="National Parks">
            <NationalParks />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
