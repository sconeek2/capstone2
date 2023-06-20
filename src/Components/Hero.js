import './Styles/Hero.css';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='hero-container'>
      <p>Discover the Outdoors! </p>
      <div className='button-container'>
        <button onClick={() => navigate('/nationalparks')}>
          Explore National Parks
        </button>
        <button onClick={() => navigate('/mountains')}>Search Mountains</button>
      </div>
    </div>
  );
};
