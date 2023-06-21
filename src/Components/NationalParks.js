import "./Styles/NationalParks.css";
import { parktype,locations } from "../Data/data";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { Radio } from "react-bootstrap";

export const NationalParks = () => {

  //this useState is to track query value 
  const [parkQueryValue, setParkQueryValue] = useState('');

  //this useState is to track store the results of the array filtering 
  const [parkQueryResults, setParkQueryResults] = useState(parktype);
  const [filterselect, setfilterselect] = useState(false);
  
  //initializing the value for parkQueryValue
  const filterParkType = (event) => {
    console.log(event);
  

  }

return (
  <div className="App">
    National Parks
   <div>
    <input type="radio" name= "filterbtn" checked={false ===filterselect} onChange={event=>{setfilterselect(false)}} />
    <label>Locations</label>
    </div>
    <div>
    <input type="radio" name="filterbtn" checked={true===filterselect} onChange={event=>{setfilterselect(true)}} />
    <label>Park Type</label>
    </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Park Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {parktype.map((park) => {
            return <Dropdown.Item onClick={filterParkType} href="#/action-1">{park}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Locations
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {locations.map((location) => {
            return <Dropdown.Item onClick={filterParkType} href="#/action-1">{location}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
  </div>
);
};