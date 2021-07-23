require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.set('view engine', 'ejs')


// connecting mongodb

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Database connected successfully');
	})
	.catch((error) => {
		console.log('Database connection failed', error);
	});



// bringing all routes

const nodeapp = require('./routes/app')



// making api

app.use('/', nodeapp);



// assigning port

const port = process.env.PORT || 5000;



// creating server
app.listen(port, () => {
    console.log('Server started successfully...')
})