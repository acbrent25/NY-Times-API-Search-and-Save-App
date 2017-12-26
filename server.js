const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets

app.use('/static', express.static(path.join(__dirname, 'client/build')));
// Add routes, both API and view
app.use(routes);


var databaseUri = 'mongodb://localhost/nytreact'

if (process.env.MONGODB_URI) {
  mongoose.connect('mongodb://acbrent25:20_Nicholas05@ds163806.mlab.com:63806/heroku_32180vqb');
} else {
  mongoose.connect(databaseUri);
}





// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/nytreact",
//   {
//     useMongoClient: true
//   }
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
