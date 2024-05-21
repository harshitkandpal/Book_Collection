import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "../styles/Login.css"
import axios from "axios"

const Login = ({setRoleVar}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const handleSubmit = () => {
    axios.post('http://localhost:3001/auth/login', {username, password})
    .then(res => {
        if(res.data.login && res.data.role === 'admin'){
          setRoleVar('admin')
          navigate('/books')
        }
      }
    )
    .catch(err => console.log(err))
    console.log('Submit')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Admin Login</h2> <br/>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="Enter Username"
          onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Enter Password"
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className="btn-login" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login