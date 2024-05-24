import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className='navbar-brand'>Book Collection</Link>
      </div>
      <div className="navbar-right">
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/books" className='navbar-link'>Books</Link>
          {role === 'admin' && 
            <Link to="/addbook" className='navbar-link'>Add Books</Link>
          }
          {role === '' ? 
            <Link to="/login" className='navbar-link'>Login</Link> 
            : <Link to="/logout" className='navbar-link'>Logout</Link> 
          }
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
