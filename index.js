const express = require('express');
const app = express();
const firebase = require("firebase/app");
//port
const port = 4000;

//MY UNIQUE configuration for firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRtT5vNBCQ54-6Pm7HQC8GNpJsFHIHglA",
  authDomain: "ktd-dw-exercise5.firebaseapp.com",
  projectId: "ktd-dw-exercise5",
  storageBucket: "ktd-dw-exercise5.appspot.com",
  messagingSenderId: "51889770166",
  appId: "1:51889770166:web:f12fba6fc498a9bcaaa017"
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
//const singlePostRoute = require('.routes/singlePost');
//const createPostRoute = require('.routes/createPost');

//app.use uses two args, function & paramter for path
app.use("/", indexRoute);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })