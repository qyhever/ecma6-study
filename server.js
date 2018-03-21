const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.get('/get', (req, res, next) => {
	res.send(req.query);
});

app.post('/post', (req, res, next) => {
	res.send(req.body);
});

app.get('/user', (req, res, next) => {
	res.send({username: 'tom', age: 18});
});

app.get('/goods', (req, res, next) => {
	res.send({goodsname: 'mi6', price: 2199});
});

app.listen(3000, () => {
	console.log('running...');
});