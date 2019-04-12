require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

// Application Middleware


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => console.log('connection successful'))


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(function(req, res, next) {
  console.log(req.body);
  next();
});
// Route Definitions
// app.use('/',)
app.use('/auth', require('./routes/auth'));
app.use('/projects', require('./routes/projects'));

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server started on port ${PORT}`)
);
