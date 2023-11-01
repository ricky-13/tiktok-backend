import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js';
// to import modules in older version we need to do something like const etc etc, but in ES6 we can directly type in import this that


// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors()); 

// add middleware before endpoints 


// DB config
const connection_url = 'mongodb+srv://admin:V8opu5eGxOkgiQee@cluster0.aragjfx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// api endpoints
app.get('/',(req, res) => res.status(200).send('hello world tiktok ricky'));

app.get('/v1/posts', (req,res) => res.status(200).send(Data));

app.get('/v2/posts', (req,res) => {
    Videos.find()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
});

app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body

    Videos.create(dbVideos)
        .then(data => res.status(201).send(data))
        .catch (err => res.status(500).send(err))
    // this syntax bcuz .create and .find functions no longer accept callback functions 

    
    // , (err, data) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
    //         res.status(201).send(data)
    //     }
    // })
});

// listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));