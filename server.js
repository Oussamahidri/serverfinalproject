const express = require('express');

const app = express();

app.use(express.json());

require('dotenv').config()

const connect = require('./config/connectDB');

connect()

app.use('/api/user',require('./routes/userRoute')) 
app.use('/api/house',require('./routes/houseRoute')) 

app.use((req,res)=>{
    res.send("API is running...")
})

const PORT = process.env.PORT || 7666

app.listen(PORT,(error)=>{
    error?console.log(error): console.log(`server is running on ${PORT}`);
});