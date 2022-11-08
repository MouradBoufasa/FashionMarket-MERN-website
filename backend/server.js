import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
res.send(data.products)
} );

app.get('/api/slider', (req, res) => {
    res.send(data.sliderItems)
    } );

    app.get('/api/category', (req, res) => {
        res.send(data.category)
        } );

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})