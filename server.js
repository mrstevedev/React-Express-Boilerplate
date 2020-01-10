const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/api/getRecords', (req, res) => {
    const list = ['The Nobodies ‎– Its Hip Hop / What You Hear', 'MC Gels ‎– Wandering Souls', 'Overtone ‎– All The Things We Are'];
    res.json(list);
    console.log('Sent a list of vinyl records');
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server starter on port ${PORT}`));

// Routes
app.get('/', (req, res) => {
    res.send('Server started');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'));
});
