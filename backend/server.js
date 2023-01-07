import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './Routes/seedRoutes.js';
import productRouter from './Routes/producRoutes.js';
import categoryRouter from './Routes/categoryRoutes.js';
import userRouter from './Routes/userRoutes.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to DB');
}).catch((err) => console.error(err.message));


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use('/api/seed', seedRouter);
app.use('/api/products/', productRouter);
app.use('/api/category/', categoryRouter);
app.use('/api/users/', userRouter);

app.use((err,req,res,next)=> {
    res.status(500).send({message : err.message});
});

// for product
app.get('/api/products', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.send(data.products)
} );

// for slider
app.get('/api/slider', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.send(data.sliderItems)
    } );

// for category

    app.get('/api/category', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.send(data.category)
        } );

    //for products quantity
    app.get('/api/products/:_id', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
        const product = data.products.find(x => x._id === req.params._id);
        if (product)
        {res.send(product)}
        else
        {res.status(404).send({message:'Product Not Found'})};
        });

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})