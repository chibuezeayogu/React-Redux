"use strict";

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _path = require("path");

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpack2 = _interopRequireDefault(require("../webpack.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compiler = (0, _webpack.default)(_webpack2.default);
var port = process.env.PORT || 3000;
var app = (0, _express.default)();
app.use((0, _compression.default)());
app.use(_express.default.static('dist'));

if (process.env.NODE_ENV !== 'production') {
  app.use((0, _webpackDevMiddleware.default)(compiler, {
    noInfo: true,
    publicPath: _webpack2.default.output.publicPath
  }));
  app.use((0, _webpackHotMiddleware.default)(compiler));
}

app.use('*', function (req, res) {
  res.sendFile((0, _path.resolve)(__dirname, './index.html'));
});
app.listen(port, function () {
  console.log("Server started on ".concat(port)); // eslint-disable-line
});