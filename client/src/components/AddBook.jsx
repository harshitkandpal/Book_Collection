import {useState} from 'react'
import "../styles/AddStudent.css"
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const AddBook = () => {
    const [name, setName] = useState('') 
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/book/add', {name, author, imageUrl})
        .then(res =>{
            if(res.data.added){
                navigate('/books')
            }else{
                console.log(res)
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
            <h2>Add Book</h2>
            <div className="form-group">
                <label htmlFor="book">Book Name:</label>
                <input type="text" id="book" name="book" 
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author Name:</label>
                <input type="text" id="author" name="author" 
                onChange={(e)=>setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" 
                onChange={(e)=>setImageUrl(e.target.value)}/>
            </div>
            <button type="submit" className="btn-student">Add</button>
        </form>
    </div>
    </div>
  )
}

export default AddBook
