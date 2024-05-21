import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import Login from './components/Login';
import Logout from './components/Logout';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';
import ViewBook from './components/ViewBook';

function App() {
  const [role, setRole] = useState('');
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify')
      .then(res => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole('');
        }
      }).catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar role={role||''} />
      <Routes>
        <Route path="/" element={<Home setRole={setRole} />} />
        <Route path="/books" element={<Books role={role} />} />
        <Route path="/login" element={<Login setRoleVar={setRole} />} />
        <Route path="/logout" element={<Logout setRole={setRole} />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="/view/:id" element={<ViewBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
