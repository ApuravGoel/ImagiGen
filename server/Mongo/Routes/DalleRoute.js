import express from "express";
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey : process.env.OPEN_API_KEY,
})

const openai = new OpenAIApi(configuration);

router.route('/').post(async(req,res) =>{
    try{
        const {prompt} = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024'
        });
        const image = aiResponse.data.data[0];
        // res.status(200).json({photo : image})
        console.log(image)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;