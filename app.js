const express = require('express');
const appRouter = require('./routes/app-router');

const app = express();

app.use(appRouter);

module.exports = app;
