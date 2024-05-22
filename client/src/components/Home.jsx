import { Link } from 'react-router-dom'
import '../styles/Home.css'


const Home = () => {
  
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-text">Book Collection</h1>
        <p className="hero-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex necessitatibus animi cum est porro ad, ipsum eum rerum architecto maxime.
        </p>
        <div className="hero-btn-container">
        <Link to="/books" className='hero-link'><button className='hero-btn-prime'>Visit</button></Link>
        <Link to="/login" className='hero-link'><button className='hero-btn'>Admin</button></Link>
        </div>
      </div>
      <div className="hero-image"></div>
    </div>
  )
}

export default Home
Home