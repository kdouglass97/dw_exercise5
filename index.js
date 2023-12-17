const express = require("express");
const app = express();
const firebase = require("firebase/app");

const port = 4000;

// web app's Firebase configuration -- make sure this is above the indexRoute
const firebaseConfig = {
  apiKey: "AIzaSyBRtT5vNBCQ54-6Pm7HQC8GNpJsFHIHglA",
  authDomain: "ktd-dw-exercise5.firebaseapp.com",
  projectId: "ktd-dw-exercise5",
  storageBucket: "ktd-dw-exercise5.appspot.com",
  messagingSenderId: "51889770166",
  appId: "1:51889770166:web:f12fba6fc498a9bcaaa017"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');
  
app.use("/", indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);

app.listen(port, () => {
    console.log(`Exercise Five listening on port ${port}`);
});