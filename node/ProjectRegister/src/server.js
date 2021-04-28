const express = require('express')
const routes = require('./routes')

const app = express();


app.use(exoress.json());
app.use(routes);


app.listen(3333)


// const {
//     index
// } = require('./routes')

// const nunjucks = require('nunjucks')
// nunjucks.configure('src/views', {
//   express: app,
//   noCache: true

// });

// // where the express is open
// app
// .use(express.static("public/"))

// .get("/", index)
// .listen(3000, () => {
//   console.log("Server running!");
// })