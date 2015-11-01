var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("/usr/lib/node_modules/angular"));
app.listen(5000);
