var debug = require('debug')('mtgdraft:init');

var express = require('express');
var app = express();
var http = require('http').Server(app);

var express_handlebars = require('express-handlebars');

app.engine('.html', express_handlebars({
  defaultLayout: 'main',
  extname: '.html'
}));

app.set('view engine', '.html');
app.set('views', __dirname + '/views');

app.config = require('nconf');
app.config.use('env');
app.config.use('file', {file:'config.json'});

app.use('/static/', express.static(__dirname + '/public'));
app.use('/', require("./routes"));

http.listen(app.config.get('PORT'));

debug("Started express server on %o", http.address());
