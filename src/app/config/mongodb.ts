import mongoose from "mongoose";
import {MONGODB_URI} from '../../../settings.json'
export default async function connectMongo() {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('MongoDB veritabanına bağlandı.')
    } catch (err) {
        console.log('hata: ', err)
    }
}