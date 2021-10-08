'use strict';

const express = require('express');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT || 8042;
const indexRouter = require('./routes/index');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/', indexRouter); // express sets content type


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});