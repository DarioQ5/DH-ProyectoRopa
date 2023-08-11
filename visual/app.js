const express = require('express');
const app = express();
const mainRouter = require('./router/main')

app.use(express.static('public'));

const port = 3000;

app.listen(port, () => console.log('Server up: ' + port) );

app.use('/',mainRouter)
/*
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/products.html'));
});

app.get('/shopping_cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/shopping_cart.html'));
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registration.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
*/