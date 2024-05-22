import express from'express';
import {Book} from '../models/Book.js'
const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/add',verifyAdmin,async (req,res)=>{
    try{
        const {name, author, genre, year, imageUrl, pdfUrl} = req.body;
         // Basic validation to check if required fields are provided
         if (!name || !author || !imageUrl || !pdfUrl || !year || !genre) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newbook = new Book ({
            name,
            author,
            genre,
            year,
            imageUrl,
            pdfUrl
        })
        await newbook.save();
        return res.json({added:true})
    }catch(e){
        return res.json({message: "Error in adding book"})
    }
})

router.get('/books',async (req,res)=>{
    try {
        const books = await Book.find()
        return res.json(books)
    } catch (error) {
        return res.json(err)
    }    
})

router.get('/book/:id', async (req,res)=>{
    try {
        const id = req.params.id
        const book = await Book.findById({_id:id})
        return res.json(book)
    } catch (err) {
        return res.json(err)
    }   
})

router.put('/book/:id', async (req,res)=>{
    try {
        const id = req.params.id
        const book = await Book.findByIdAndUpdate({_id:id},req.body)
        return res.json({updated:true,book})
    } catch (err) {
        return res.json(err)
    }   
})

router.delete('/book/:id', async (req,res)=>{
    try {
        const id = req.params.id
        const book = await Book.findByIdAndDelete({_id: id})
        return res.json({deleted:true,book})
    } catch (err) {
        return res.json(err)
    }
})

export {router as bookRouter}