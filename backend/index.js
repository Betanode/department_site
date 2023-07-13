const express = require('express')
const app = express()
const port = 3500
const mongoDB = require('./db')
mongoDB()
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin , X-Requested-With , Content-Type , Accept"
    );
    next();
})
app.use(express.json())
app.use('/api',require("./routes/CreateNote"))
app.use('/api',require("./routes/DisplayFaculty"))
//app.use('/api',require("./routes/DisplayB2020"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})