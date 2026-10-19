require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Berhasil terhubung ke MongoDb Atlas'))
    .catch((err) => console.eror('Gagal konek', err))


const testSchema = new mongoose.Schema({
    pesan: String,
    tanggal: { type: Date, default: Date.now }
});

const Test = mongoose.model('test', testSchema, 'belajar_mongodb');

async function tambahDataTest() {
    try {
        const dataBaru = new Test({
            pesan: "Halo dari nodejs coy"
        });

        const hasil = await dataBaru.save();
        console.log('Dataset disimpan', hasil);

    } catch (eror) {
        console.eror('eror menyimpan', eror);
    } finally {
        mongoose.connection.close();
    }
}

tambahDataTest();