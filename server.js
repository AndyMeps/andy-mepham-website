'use strict';

let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);

console.log('Server started at: localhost:' + (process.env.PORT || 3000));