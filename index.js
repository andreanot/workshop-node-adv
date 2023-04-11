import dotenv from 'dotenv'
dotenv.config();

import router from './router.const.js';


import express from 'express';
import mongoose from 'mongoose';






const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.${process.env.MONGO_SERVER}.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json())

app.use('/api', router)

app.listen(process.env.PORT, process.env.HOST, async (err) => {
    if (err) console.log(err, 'Error while starting server');


    await mongoose.connect(MONGO_URI)

    console.log(`Server started listening on http://${process.env.HOST}:${process.env.PORT}`)
})