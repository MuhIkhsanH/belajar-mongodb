require('dotenv').config();
const mongoose = require('mongoose');

const uangSchema = new mongoose.Schema({
    pemilik: String,
    saldo: Number,
    tanggal: { type: Date, default: Date.now }
});

const Uang = mongoose.model('Uang', uangSchema, 'belajar_mongodb');

async function lihatUang() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const dataUang = await Uang.findOne({
            pemilik: "iksun"
        });

        if (dataUang) {
            console.log("Berhasil, data uang kamu:")
            console.log(`Pemilik: ${dataUang.pemilik}`)
            console.log(`Saldo: ${dataUang.saldo}`)
        } else {
            console.log('Data uang tidak ditemukan')
        }
    } catch (eror) {
        console.error('Error', eror);
    } finally {
        mongoose.connection.close();
    }
}

lihatUang();