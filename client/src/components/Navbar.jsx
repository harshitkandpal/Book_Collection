import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className='navbar-brand'>Book Store</Link>
      </div>
      <div className="navbar-right">
        <Link to="/books" className='navbar-link'>Books</Link>
        <Link to="/addbooks" className='navbar-link'>Add Books</Link>
        <Link to="/addstudent" className='navbar-link'>Add Student</Link>
        <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
        <Link to="/login" className='navbar-link'>Login</Link>
      </div>
    </div>
  )
}

export default Navbar
