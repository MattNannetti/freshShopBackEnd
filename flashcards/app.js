//mongoDB CONNECTION: mongodb+srv://matt-test:<password>@cluster0.nvxje.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Yay it works well</h1>');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello you</h1>');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});