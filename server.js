import express from 'express';
import compression from 'compression';
import { resolve } from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);
const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

if (process.env.NODE_ENV !== 'production') {
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}));
	app.use(webpackHotMiddleware(compiler));
}

app.use('*', (req, res) => {
	res.sendFile(resolve(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`Server started on ${port}`); // eslint-disable-line
});