import express from 'express';
import compression from 'compression';
import { resolve } from 'path';

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.use('*', (req, res) => {
	res.sendFile(resolve(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`Server started on ${port}`); // eslint-disable-line
});