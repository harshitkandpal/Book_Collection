import mongoose from "mongoose";
 
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      pdfUrl: {
        type: String  // Assuming you store the URL of the PDF file
      },
      genre:{
        type: String,
      },
      year:{
        year: String,
      }
});

const bookModel = mongoose.model('Book', bookSchema);
export { bookModel as Book }