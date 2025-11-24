
//step1
//const express = require('express');
//const bodyParser = require('body-parser');

import express from 'express';
import bodyParser from 'body-parser';

const data = {

};

//step2
const app = express();
//step3
app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.post('/send', (req, res) => {
    console.log(req.body);
});

app.delete('/data', (req, res) => {
    res.send(data);
});

const server = app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 

