import './App.css';
import { Home } from './Components/Home.js';
import { MountainInfo } from './Components/MountainInfo';
import { NationalParks } from './Components/NationalParks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='nav-container'>
          <ul>
            <li>
              <Link to='/home'>Home </Link>
            </li>
            <li>
              <Link to='/nationalparks'>National Parks </Link>
            </li>
            <li>
              <Link to='/mountianinfo'>Mountain Information </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/nationalparks' element={<NationalParks />} />
          <Route path='/mountianinfo' element={<MountainInfo />} />
        </Routes>

        <Outlet />
      </div>
    </Router>
  );
}

export default App;
