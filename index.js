require('dotenv').config()
const express =  require('express');
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const path = require('path')
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const router = require('./routes/candidateroute');

const mongourl = process.env.MONGO_URI || 'mongodb://localhost:27017/oltu'
mongoose.connect(mongourl,
{useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>{
console.log('connected to mongodb successfully')
})
.catch(()=>{
    console.log('couldnot connect to mongodb')
})

const routes = require('./routes/candidateroute')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/',routes)

app.listen(port,console.log('server successfully running on '+port))
