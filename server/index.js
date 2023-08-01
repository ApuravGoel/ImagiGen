import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Mongo/connectMO.js';
import postRoute from './Mongo/Routes/postRoute.js'
import dalleRoute from './Mongo/Routes/DalleRoute.js'
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit : '50mb'}));
app.use('/api/v1/post',postRoute);
app.use('/api/v1/dalle',dalleRoute);
app.get('/', (req,res)=>{
    res.send("Hello");
})
const startServer = async ()=>{
    try{
        connectDB(process.env.MONGODB_URI);
        app.listen(4000);
    }
    catch(err){console.log(err)}
}
startServer();