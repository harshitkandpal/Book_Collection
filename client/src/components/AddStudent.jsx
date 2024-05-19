import {useState} from 'react'
import "../styles/AddStudent.css"
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const AddStudent = () => {
    const [roll, setRoll] = useState('') 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [grade, setGrade] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/student/register', {roll, username, password, grade})
        .then(res => {
            if(res.data.registered){
                navigate('/dashboard')
            }
          }
        )
        .catch(err => console.log(err))
        console.log('Submit')
      }
  return (
    <div className="student-page">
        <div className="student-from-container">
        <form className="student-form" onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className="form-group">
                <label htmlFor="roll">Roll No:</label>
                <input type="text" id="roll" name="roll" 
                onChange={(e)=>setRoll(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" 
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="grade">Grade:</label>
                <input type="text" id="grade" name="grade" 
                onChange={(e)=>setGrade(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" 
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn-student">Register</button>
        </form>
    </div>
    </div>
  )
}

export default AddStudent
