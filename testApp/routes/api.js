const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');


router.get('/', (req, res) => {

    BlogPost.find({ })
    .then((data)=> {
        console.log('Data: ', data);
    })
    .catch((error)=> {
        console.log('error:', daerrorta);
    })
});

router.get('/name', (req, res) => {
    const data = {
        username: 'john',
        age: 5
    };
    res.json(data);
});


module.exports = router;