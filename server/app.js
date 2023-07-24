require('dotenv').config()
const express = require('express');
const connect = require('./config/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT

const start = async () => {
  await connect();
  app.listen(PORT, console.log(`Server running on ${PORT}`))
}

start();