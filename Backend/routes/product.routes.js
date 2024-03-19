const express = require('express')
const router = express.Router()

const Product = require('../models/product.model')


router.get("/", async (req, res) => {
    try{
        const products = await Product.find()
        res.send(products)

    }
    catch(err){
        res.send(err)
    }

})

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const product = new Product(req.body)
        const data = await product.save()
        res.send(data)
    } catch (err) {
        res.send(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

router.put("/:id", async (req, res) => {
    try {
        console.log(req.body)
        const data = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

module.exports = router