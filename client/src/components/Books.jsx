import axios from 'axios';
import {useState, useEffect} from 'react'
import BookCard from './BookCard';
import '../styles/Book.css'

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/book/books')
    .then(res=>{
      setBooks(res.data)
      console.log(res.data)
    }).catch(err=>{console.log(err)});
  },[])
  return (
    <div className="book-list">
      {books.map(book =>{
        return <BookCard key = {book.name} book = {book}/>
      })}
    </div>
  )
}

export default Books
Books