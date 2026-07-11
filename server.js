const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.json({message: "Hello, my first backend server is working!"});
});

app.get('/status', (req, res) => {
    res.json({status: "active", uptime: process.uptime()});
});

app.get('/hello/:name', (req, res) => {
    res.json({message: `Hello, ${req.params.name}!`});
});

app.post('/data', (req, res) => {
    const inCommingData = req.body;
    res.json({status: "Data received", received: inCommingData});
});

app.listen(PORT, () => {
    console.log(`Server is working in http://localhost:${PORT} address.`)
});