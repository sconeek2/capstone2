import './Styles/Home.css'
import { Hero } from './Hero'
import { Card } from './Card';
export const Home = () => {
  return (
    <div className="App">
      <Hero />
      <div className="aboutus">
        <h3>About Us</h3>
        <p>We are a community of hiker enthusiasts who are
          passionate about exploring the great outdoors and experiencing the
          beauty of nature firsthand. We believe that hiking is not just a physical
          activity, but a spiritual and mental one as well, and that it can help individuals connect with their inner selves and the world around them. Whether you're a seasoned hiker or just starting out, we welcome you to join us on our adventures and discover the transformative power of nature.</p>
      </div>
    <Card/>
    
    </div>

  );
}
