const express = require('express');
const path = require('path');

// setup app
const app = express()
const sever = app.listen(8000, () => {
    console.log('listening to port 8000');
});

// setup static file
app.use(express.static('public'));

// setup routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});