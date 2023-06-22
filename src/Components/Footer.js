import { Card2 } from "./Card2";
import "./Styles/Footer.css";
import photo1 from "../../public/fakepark.jpg";
import photo2 from "../../public/arches.jpg";
import photo3 from "../../public/logandstream.jpg";

export const Footer = () => {
  return (
    <div>
      <h1 className="footer-title">Featured Parks</h1>
      <div className="footer-container">
        <Card2 img={photo1} />
        <Card2 img={photo2} />
        <Card2 img={photo3} />
      </div>
    </div>
  );
};
