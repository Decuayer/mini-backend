const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.json({message: "Hello, my first backend server is working!"});
})

app.get('/status', (req, res) => {
    res.json({status: "active", uptime: process.uptime()});
})

app.listen(PORT, () => {
    console.log(`Server is working in http://localhost:${PORT} address.`)
})