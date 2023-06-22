import './Styles/Card.css';

export const Card = ({ park }) => {
  return (
    <div className='card-style'>
      <div className='park-img'></div>

      <div className='card-body'>
        <h5 className='park-name'>{park.LocationName}</h5>
        <p className='park-address'>{park.Address}</p>
      </div>
    </div>
  );
};
