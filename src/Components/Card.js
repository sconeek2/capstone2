import './Styles/Home.css'
import Mountain from '../images/mountains/Adams-StoryImage_2.jpg'
export const Card = () => {
  return (
    <div>
        <img alt="Adam Mountain" src={Mountain}/>
        <div className='card-body'>
            <h3>
                Hot Springs
            </h3>
            <p>
                description 
            </p>
        </div>

    </div>

  );
}