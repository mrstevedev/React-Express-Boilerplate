const express = require('express');
const path = require('path');
const app = express();

app.get('/api/getRecords', (req, res) => {
    const list = ['The Nobodies ‎– Its Hip Hop / What You Hear', 'MC Gels ‎– Wandering Souls', 'Overtone ‎– All The Things We Are'];
    res.json(list);
    console.log('Sent a list of vinyl records');
});


// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder 
    app.use(express.static(path.join('client_src/dist')));

    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client_src', 'dist', 'index.html'));
    });
    
}

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server starter on port ${PORT}`));
