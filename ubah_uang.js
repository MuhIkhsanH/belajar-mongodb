require('dotenv').config();
const mongoose = require('mongoose');

const uangSchema = new mongoose.Schema({
    pemilik: String,
    saldo: Number,
    tanggal: { type: Date, default: Date.now }
});

const Uang = mongoose.model('Uang', uangSchema, 'belajar_mongodb');

async function ubahUang() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const hasil = await Uang.updateOne(
            { pemilik: "iksun"},
            {
                $set: { saldo: 50000 },
                $currentDate: { tanggal: true }
            }
        );

        console.log('status update:', hasil);
    } catch (eror) {
        console.error('gagal mengubah:',error)
    } finally {
        await mongoose.connection.close();
    }
}

ubahUang();