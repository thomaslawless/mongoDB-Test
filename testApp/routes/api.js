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

router.post('/save', (req, res) => {
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    //.save
    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({msg: 'sorry, internal server error'});
        }else{
            res.json({
                msg: 'we recieved data'
    });
} 
});

router.get('/name', (req, res) => {
    const data = {
        username: 'john',
        age: 5
    };
    res.json(data);
});


module.exports = router;
});