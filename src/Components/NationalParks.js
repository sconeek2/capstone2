import "./Styles/NationalParks.css";
import { parktype } from "../Data/data";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

export const NationalParks = () => {

  //this useState is to track query value 
  const [parkQueryValue, setParkQueryValue] = useState('');

  //this useState is to track store the results of the array filtering 
  const [parkQueryResults, setParkQueryResults] = useState(parktype);

  //initializing the value for parkQueryValue
  const filterParkType = (event) => {
    console.log(event);
    setParkQueryValue (event.target.text);
    let tempParks = parktype.filter (p) => {
      p.
    };

  }

  return (
    <div className="App">
      National Parks
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
      
    </div>
  );
};