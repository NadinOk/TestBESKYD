import mongoose from "mongoose";
import {uuid} from 'uuidv4';

const roles = ['Customer', 'Business', 'Admin'];
const statuses = ['pending', 'close', 'open'];


const Users = new mongoose.Schema({
    id: {
        type: String,
        default: uuid,
        unique: true
    },
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    amount: {
        type: Number,
    },
    role: {
        type: String,
        enum: roles,
    },
    status: {
        type: String,
        enum: statuses,
        default: 'pending'
    },

})

export default mongoose.model('Users', Users)