import './App.css'
import { Home } from './Components/Home.js';
import { MountainInfo } from './Components/MountainInfo';
import { NationalParks } from './Components/NationalParks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        
      </header>
      <Home />
      <MountainInfo />
      <NationalParks />
    </div>
  );
}

export default App;
