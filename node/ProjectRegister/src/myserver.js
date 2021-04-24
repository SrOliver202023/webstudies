var express = require('express');
var app = express();


const {
    index
} = require('./mpages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: app,
  noCache: true

});

// where the express is open
app
.use(express.static("public/"))

.get("/", index)
.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});