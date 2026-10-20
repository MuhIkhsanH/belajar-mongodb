require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('berhasil terhubung'))
    .catch((err) =>console.error('gagal konek',err));

const uangSchema = new mongoose.Schema({
    pemilik: String,
    saldo: Number,
    tanggal: { type: Date, deafult: Date.now }
});

const Uang = mongoose.model('uang', uangSchema, 'belajar_mongodb');

async function tambahUang() {
    try {
        const dataUang = new Uang({
            pemilik: "iksun",
            saldo: 50000
        });

        const hasil = await dataUang.save();
        console.log('uang berhasil disimpan', hasil);
    
    } catch (eror) {
        console.error('Gagal menyimpan', hasil);
    } finally {
        mongoose.connection.close();
    }
}

tambahUang();