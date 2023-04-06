import mongoose from 'mongoose';
import { DATABASE_URI } from '../config'

export default async() => {
    try {
        await mongoose.connect(DATABASE_URI)
        console.log("Database working")
    } catch (err) {
        console.log(err);
        process.exit(1);
    };
};