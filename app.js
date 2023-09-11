const express = require('express');
const app = express();
const db = require('./db');
const port = process.env.PORT || 7000;
const cors = require('cors');
app.use(cors())

const AuthController = require('./auth/authController');
app.use('/api/auth', AuthController)

app.listen(port,() => {
    console.log('listening on port 7000')
})