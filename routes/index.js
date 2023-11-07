const express = require("express");
const router = express.Router();

//Initialize Firestore Database
const firestore = require("firebase/firestore");

//create a reference to the database
const db = firestore.getFirestore();

//define index route - get all posts
router.get("/", (req,res) => {
    const postsQuery = firestore.getDocs(firestore.collection(db,"posts"));
    const postsArray = []

    postsQuery
    .then((response) => {
        response.forEach((post) => {
            console.log(post.data());
            postsArray.push({ id: post.id, ...post.data() });
        })
        res.send(postsArray)
    })
    .catch((error) => {
        console.log(error);
        return res.send(error);
    });
});

module.exports = router;