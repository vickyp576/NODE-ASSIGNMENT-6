const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
// Import routes
const blogRoute = require('./routes/blog');


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

//routes 
app.use('/blog', blogRoute)
dotenv.config()

//connect to db
// mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/blogs",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("Connected to Database")
})

app.listen(5000,()=> console.log("Listening on localhost 5000"))