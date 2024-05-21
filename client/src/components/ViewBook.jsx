import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    // Fetch book details using axios
    const fetchBookDetails = async () => {
      try {
        axios.get(`http://localhost:3001/book/book/${id}`)
          .then(res => {
            setBook(res.data);
            setPdfUrl(res.data.pdfUrl); // Assuming the API response contains a pdfUrl field
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-book">
      <div className="pdf-viewer">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="750px"
        ></iframe>
      </div>
    </div>
  );
};

export default ViewBook;
