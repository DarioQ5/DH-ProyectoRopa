const express = require('express');
const app = express();
const mainRouter = require('./router/main')

app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

const port = 3000;

app.listen(port, () => console.log('Server up: ' + port) );

app.use('/',mainRouter)