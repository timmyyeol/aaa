const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/public`));
app.listen(3000, () => console.log('server started'));
app.get('/addition', (req, res) => {
	const query = req.query;
	const { a = 0, b = 0 } = query;
	res.json({ result: parseInt(a) + parseInt(b)});
});

app.get('/subtraction', (req, res) => {
	const query = req.query;
	const { a = 0, b = 0 } = query;
	res.json({ result: parseInt(a) - parseInt(b)});
});

app.get('/multiplication', (req, res) => {
	const query = req.query;
	const { a = 0, b = 0 } = query;
	res.json({ result: parseInt(a) * parseInt(b)});
});

app.get('/division', (req, res) => {
	const query = req.query;
	const { a = 0, b = 0 } = query;
	res.json({ result: parseInt(a) / parseInt(b)});
});