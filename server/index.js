import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import {user, getAll, updateData} from "./src/users/userController.js";
import cors from "cors"


const app = express();

const PORT = process.env.PORT || 8080

async function start() {
    try {
        app.listen(PORT, () => {
            mongoose.connect('mongodb://localhost:27017/beskydmongo?authSource=admin', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                user: 'admin',
                pass: 'admin'
            })
                .then(() => {
                    console.log('Connected to MongoDB!');
                })
                .catch((err) => {
                    console.error('Error connecting to MongoDB', err);
                });
            console.log('Server listen port ', PORT)
        })
    } catch (err) {
        console.log('Error listen port', err)
    }
}

start();
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use('/api', user)
app.use('/api', getAll)
app.use('/api', updateData)


const corsOptions = {
    origin: '*',
    credentials: true,
};

app.use(cors(corsOptions));
