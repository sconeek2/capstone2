import "./Styles/NationalParks.css";
import { parktype, locations, nationalparks } from "../Data/data";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { Radio } from "react-bootstrap";
import { Card } from "./Card";
import { ParksHero } from "./ParksHero";
import { Footer } from "./Footer";

export const NationalParks = () => {
  //this useState is to track query value
  const [parkQueryValue, setParkQueryValue] = useState("");

  //this useState is to track store the results of the array filtering

  const [filterselect, setfilterselect] = useState(false);

  //initializing the value for parkQueryValue
  const filterParkType = (event) => {
    console.log(event.target.dataset.id);
    setParkQueryValue(event.target.dataset.id);
  };

  let parkQueryResults = nationalparks.filter((nationalpark) => {
    return nationalpark.LocationName.includes(parkQueryValue);
  });

  let locationQueryResults = nationalparks.filter((nationalpark) => {
    return nationalpark.State === parkQueryValue;
  });

  const filterLocations = (event) => {
    console.log(event);
    setParkQueryValue(event.target.dataset.id);
  };
  return (
    <div className="App">
      <ParksHero></ParksHero>
      <div>
        <input
          type="radio"
          name="filterbtn"
          checked={false === filterselect}
          onChange={(event) => {
            setfilterselect(false);
          }}
        />
        <label>Locations</label>
      </div>
      <div>
        <input
          type="radio"
          name="filterbtn"
          checked={true === filterselect}
          onChange={(event) => {
            setfilterselect(true);
          }}
        />
        <label>Park Type</label>
      </div>
      {filterselect ? (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Park Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {parktype.map((park) => {
              return (
                <Dropdown.Item
                  onClick={filterParkType}
                  data-id={park}
                  href="#/action-1"
                >
                  {park}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Locations
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {locations.map((location) => {
              return (
                <Dropdown.Item onClick={filterLocations} data-id={location}>
                  {location}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      )}

      <div className="parks-card-container">
        <div className="park-query-value">{parkQueryValue}</div>
        <div className="park-query-data-container">
          {filterselect
            ? parkQueryResults.map((parkQueryResult) => (
                <Card park={parkQueryResult} />
              ))
            : locationQueryResults.map((locationQueryResult) => (
                <Card park={locationQueryResult} />
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
