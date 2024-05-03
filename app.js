const bodyParser = require("body-parser");
const cors = require('cors');
const express = require('express');
const db = require('./connection');
const createBookRoute = require('./Routes/addBook')

const port = process.env.port || 5000

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use('/api', createBookRoute )

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}) 
