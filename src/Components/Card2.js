import "./Styles/Card2.css";

export const Card2 = ({ img }) => {
  return (
    <div className="card-style">
      <div
        className="card2-park-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="card-body">
        <h5 className="park-name"> Park Name Here</h5>
        <p className="park-address">Park Address Here</p>
      </div>
    </div>
  );
};
