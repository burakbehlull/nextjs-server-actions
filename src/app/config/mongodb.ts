import mongoose from "mongoose";
export default async function connectMongo() {
    try {
        //MONGODB URL
        await mongoose.connect('mongodb+srv://burakyabgu:Burak123@cluster0.s7cqbgh.mongodb.net')
        console.log('MongoDB veritabanına bağlandı.')
    } catch (err) {
        console.log('hata: ', err)
    }
}