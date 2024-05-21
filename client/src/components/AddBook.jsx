import {useState} from 'react'
// import "../styles/AddaddBook.css"
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const AddBook = () => {
    const [name, setName] = useState('') 
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [pdfUrl, setPDFUrl] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/book/add', {name, author,genre, year, imageUrl,pdfUrl})
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
    <div className="addBook-page">
        <div className="addBook-from-container">
        <form className="addBook-form" onSubmit={handleSubmit}>
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
                <label htmlFor="genre">Genre:</label>
                <input type="text" id="genre" name="genre" 
                onChange={(e)=>setGenre(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="year">Year published:</label>
                <input type="text" id="year" name="year" 
                onChange={(e)=>setYear(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" 
                onChange={(e)=>setImageUrl(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="pdf">PDF URL:</label>
                <input type="text" id="pdf" name="pdf" 
                onChange={(e)=>setPDFUrl(e.target.value)}/>
            </div>
            <button type="submit" className="btn-addBook">Add</button>
        </form>
    </div>
    </div>
  )
}

export default AddBook
