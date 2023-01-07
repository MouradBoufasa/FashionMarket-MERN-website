import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/' , async (req,res) => {
    const products = await Product.find();
    res.send(products);
});

    //for products slug
    productRouter.get('/:slug', async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
        const product = await Product.findOne({slug:req.params.slug});
        if (product)
        {res.send(product)}
        else
        {res.status(404).send({message:'Product Not Found'})};
        });

export default productRouter;