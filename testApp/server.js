// import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 8080;
/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tomTesting:<tom123>@cluster0.gnrqb.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

const MongoDB_URI = 'mongodb+srv://tomTesting:tom123@cluster0.gnrqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MongoDB_URI || 'mongodb://localhost/tom_database', {
    useNewURLParser: true,
 //   useUnifedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log('mongoose is connected!');
});

//Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

//SAving data to mongoDB

const data = {
    title: "Testing Title",
    body: "This is the body."
}

const newBlogPost = new BlogPost(data);

/*
newBlogPost.save((error) => {
    if (error){
        console.log('it does not work');ç
    }else{
        console.log('it does work');
    }
})
*/
////
//HTTP request logger
app.use(morgan('tiny'));

app.get('/api', (req, res) => {
    BlogPost.find({ })
    .then((data)=> {
        console.log('Data: ', data);
    })
    .catch((error)=> {
        console.log('error:', daerrorta);
    })
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'john',
        age: 5
    };
    res.json(data);
});
app.listen();
app.listen(PORT, console.log(`server is starting at ${PORT}`))