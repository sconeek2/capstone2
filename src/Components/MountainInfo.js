import './Styles/MountainInfo.css';
import { mountains } from '../Data/data';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { Mountain } from './Mountain';
import { MountainsHero } from './MountainsHero';

export const MountainInfo = () => {
  const [mountainsArray, setMountainsArray] = useState(mountains);
  const [mountain, setMountain] = useState([]);

  const handleMountainClick = (event) => {
    console.log(event);
    let mountainData = mountainsArray.filter((mountain) => {
      return mountain.name === event.target.dataset.id;
    });

    console.log(mountainData);
    setMountain(mountainData);
  };

  return (
    <div className='App'>
      <MountainsHero />
      <div>
        <Dropdown className='Mnt-dropdownbtn'>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Mountains
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {mountains.map((mountain) => {
              return (
                <Dropdown.Item
                  data-id={mountain.name}
                  onClick={handleMountainClick}
                >
                  {mountain.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='mountain-container'>
        {mountain.map((m) => (
          <div className='mountain-info-container'>
            <div
              className='mountain-img'
              style={{ backgroundImage: `url(${m.img})` }}
            >
              &nbsp;
            </div>
            <h1> {m.name}</h1>
            <p>{m.elevation} ft</p>
            <p>
              Lat: {m.coords.lat} | Long: {m.coords.lng}
            </p>
            <p>{m.effort}</p>
            <p> {m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
