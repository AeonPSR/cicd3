const express = require('express');
const { sum, multiply, divide, subtract } = require('../service/compute');

const router = express.Router();

router.get('/sum/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = sum(num1, num2);
    res.send({ result });
});

router.get('/mult/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = multiply(num1, num2);
    res.send({ result });
});

router.get('/div/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    if (num2 === 0) {
        res.status(400).send('Cannot divide by zero');
    } else {
        const result = divide(num1, num2);
        res.send({ result });
    }
});

router.get('/substract/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = subtract(num1, num2);
    res.send({ result });
});

router.use((err, req, res, next) => {
    res.status(500).send({ error: err.message});
});

module.exports = router;

module.exports = router;