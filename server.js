const bodyParser = require("body-parser");
const cors = require('cors');
const express = require('express');
const db = require('./connection.js');
const createBookRoute = require('./Routes/addBook.js')


const port = process.env.port || 5000

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use('/api', createBookRoute )

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}) 
