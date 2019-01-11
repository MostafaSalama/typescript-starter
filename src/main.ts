import * as express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.listen(3000, () => {
	console.log('listening to port 3000');
	console.log('Thanks for that')
	console.log('Thanks for that')
});