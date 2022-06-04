console.log('May Node be with you')

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true}))

MongoClient.connect('mongodb+srv://mapstonepark:DPYpKjMfxA23T4L9@cluster0.vbv2j.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology: true})
    .then(client=> {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
    })
    .catch(error=> console.error(error))

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res)=> {
    console.log(req.body)
})