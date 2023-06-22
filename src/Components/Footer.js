import { Card2 } from "./Card2";
import "./Styles/Footer.css";
import photo1 from "../images/fakepark.jpg";
import photo2 from "../images/arches.jpg";
import photo3 from "../images/logandstream.jpg";

export const Footer = () => {
  return (
    <div>
      <h1 className="footer-title">Featured Parks</h1>
      <div className="footer-container">
        <Card2
          img={photo1}
          name="Cascade Peaks National Park"
          add="1234 Green Street, Anytown, USA"
        />
        <Card2
          img={photo2}
          name="Eagle Ridge National Park"
          add="5678 Blue Avenue, Somewhereville, USA"
        />
        <Card2
          img={photo3}
          name="Mystic Shores National Park"
          add="9012 Red Road, Nowheretown, USA"
        />
      </div>
    </div>
  );
};
