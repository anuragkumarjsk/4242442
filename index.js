const express =  require('express');
const app = express()
const port = 4000
const cors = require('cors')
const routes = require('./routes/candidateroute')

const mongoose = require('mongoose');
const router = require('./routes/candidateroute');
mongoose.connect('mongodb+srv://oltu:floatlikeabutterflystinglikeabee@cluster1.xg5hx.mongodb.net/oltu?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>{
console.log('connected to mongodb successfully')
})
.catch(()=>{
    console.log('couldnot connect to mongodb')
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',routes)

app.listen(port,console.log('server successfully running on '+port))
