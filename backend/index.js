// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('./Routes/AuthRouter');
// const ProductRouter = require('./Routes/ProductRouter');


// require('dotenv').config();
// require('./Models/db');
// const PORT = process.env.PORT || 8080;

// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

// app.use(bodyParser.json());
// app.use(cors());
// app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);


// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`)
// })







const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const CoordinateRouter = require('./Routes/CoordinateRouter'); // New route for coordinates

require('dotenv').config();
require('./Models/db'); // Your existing MongoDB connection
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/api', CoordinateRouter); // Add the route to handle coordinates

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});




// modifying it on 13th nov 2024

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('../Routes/AuthRouter');
// const ProductRouter = require('../Routes/ProductRouter');
// const CoordinateRouter = require('../Routes/CoordinateRouter'); // New route for coordinates

// require('dotenv').config();
// require('../Models/db'); // Your existing MongoDB connection

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);
// app.use('/api', CoordinateRouter); // Add the route to handle coordinates

// // Ping route
// app.get('/ping', (req, res) => {
//   res.send('PONG');
// });

// // Export the app as a serverless function for Vercel
// module.exports = (req, res) => {
//   app(req, res);
// };
