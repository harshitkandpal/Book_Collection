import { useState, useEffect } from 'react';
// import "../styles/AddStudent.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const EditBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')
    const [imageUrl, setImageUrl] = useState('');
    const [pdfUrl, setPDFUrl] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/book/book/${id}`)
            .then(res => {
                console.log('API Response:', res.data);
                const book = res.data;
                setName(book.name || '');
                setAuthor(book.author || '');
                setGenre(book.genre || '');
                setYear(book.year || '');
                setImageUrl(book.imageUrl || '');
                setPDFUrl(book.pdfUrl || '');
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/book/book/${id}`, { name, author ,genre ,year ,imageUrl ,pdfUrl })
            .then(res => {
                if (res.data.updated) {
                    navigate('/books');
                } else {
                    console.log(res);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="student-page">
            <div className="student-from-container">
                <form className="student-form" onSubmit={handleSubmit}>
                    <h2>Edit Book</h2>
                    <div className="form-group">
                        <label htmlFor="book">Book Name:</label>
                        <input
                            type="text"
                            id="book"
                            name="book"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author Name:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year Published:</label>
                        <input
                            type="text"
                            id="year"
                            name="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL:</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pdf">PDF URL:</label>
                        <input
                            type="text"
                            id="pdf"
                            name="pdf"
                            value={pdfUrl}
                            onChange={(e) => setPDFUrl(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-student">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditBook;
