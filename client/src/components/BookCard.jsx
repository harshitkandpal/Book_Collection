import {Link} from 'react-router-dom'

const BookCard = ({book,role}) => {
    const {name, author, genre, year,  imageUrl} = book;
    console.log("-----------" +book)
  return (
    <div className="book-card">
        <img src={imageUrl} alt={name} className="book-image" />
        <div className="book-details">
            <h3>{name}</h3>
            <div className='book-card-content'>
            <div className='book-card-details'>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
            </div>
            <div className='book-card-year'><p>{year}</p></div>
            </div>
        </div>
        <div className="book-actions">
        <button>
          <Link to={`/view/${book._id}`} className='btn-link'>View</Link>
        </button>
        {role === 'admin'&&
          <>
            <button><Link to={`/book/${book._id}`}  className='btn-link'>edit</Link></button>
          <button><Link to={`/delete/${book._id}`}  className='btn-link'>delete</Link></button>
          </>
        }
        </div>
        
    </div>
  )
}

export default BookCard
