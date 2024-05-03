const express = require('express')
const router = express.Router()
const Book = require('../Models/book.model')

router.post('/addBook', async (req,res) => {
    try {
        const newBook = new Book({
            name: req.body.book_name,
            author: req.body.book_author,
            price: req.body.book_price,
            publishDate: req.body.publishDate
        })
    
        const saveBook = await newBook.save();
    
        res.json(savedBook);
    } 
    
    catch (error) {
        console.error(error);
    }
})

module.exports = router