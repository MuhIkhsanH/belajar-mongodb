require('dotenv').config();
const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    pesan: String,
    tanggal: { type: Date, default: Date.now }
});

const testModel = mongoose.model('Test', testSchema, 'belajar_mongodb');

async function cariData() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const semuaData = await testModel.find({
            pesan: { $regex: 'keempat', $options: 'i' }
        }).select('pesan -_id');
        console.log('Berhasil, isinya:');
        console.log(semuaData);
    
    } catch (eror) {
        console.error("Error", eror);
    } finally {
        await mongoose.connection.close();
    }
}

cariData();