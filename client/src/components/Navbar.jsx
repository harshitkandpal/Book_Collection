import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ role }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className='navbar-brand'>Book Collection</Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-links">
          <Link to="/books" className='navbar-link'>Books</Link>
          {role === 'admin' && 
            <Link to="/addbook" className='navbar-link'>Add Books</Link>
          }
          {role === '' ? 
            <Link to="/login" className='navbar-link'>Login</Link> 
            : <Link to="/logout" className='navbar-link'>Logout</Link> 
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
