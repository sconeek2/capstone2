import './Styles/Card2.css';
import Mountain from '../images/mountains/Adams-StoryImage_2.jpg';

export const Card2 = () => {
  return (
    <div className='card-style'>
      <div className='park-img'></div>

      <div className='card-body'>
        <h5 className='park-name'> Park Name Here</h5>
        <p className='park-address'>Park Address Here</p>
      </div>
    </div>
  );
};
