// 1 - environment
require('dotenv').config();
// 2 - imports
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const multer = require('multer');
const cloudinary = require('cloudinary');
// 3 - app set up
const app = express();
app.set('view engine', 'ejs');
// 4 - middleware
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false })); // able to access req.body
// 5 - ROUTES
app.get('/', function(req, res) {
    res.send('welcome to my express cloudinary app.')
});

// listen on PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})