const express = require("express");
const router = express.Router();

//styles?
const submitForm = `
    <link rel="stylesheet" type="text/css" href="/createPostStyle.css">
    <form action="/create/submit">
        <!-- Form content -->
    </form>
`;

// intialize firebase database 
// --> check dependencies to see if you have firebase
const firestore = require("firebase/firestore");
// create a reference to the database
const db = firestore.getFirestore();

// define index route --> get all posts
router.get("/", (req, res) => {
    const postsQuery = firestore.getDocs(firestore.collection(db, "posts"));
    const postsArray = [];

    postsQuery
        .then((response) => {
            response.forEach((post) => {
                console.log(post.data());
                // '...' is spread operiate
                // instead of creating indv objects for each key pai
                //assigns a value through (almost like a map)
  
                postsArray.push({id: post.id, ...post.data()}); 
            });
            res.send(postsArray);
        }) 
        .catch((error) => {
            console.log(error);
            return res.send(error);
        });
});

//add these after local 4000 to go to certain functions
const singlePostRoute = require('./singlePost');
router.use("/post", singlePostRoute);
const createPostRoute = require('./createPost');
router.use("/create", createPostRoute);

module.exports = router;