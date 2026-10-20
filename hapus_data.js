require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('berhasil terhubung'))
    .catch((err) => console.error('gagal konek', err));

const testSchema = new mongoose.Schema({
    pesan: String,
    tanggal: { type: Date, default: Date.now }
});

const Test = mongoose.model('Test', testSchema, 'belajar_mongodb');

async function hapusData() {
    try {
        const hasil = await Test.deleteOne({
            pesan: "halo aku pesan dari noejs"
        });

        console.log('data berhasil dihapus', hasil)
    
    } catch (eror) {
        console.error('error menghapus data:', eror)
    } finally {
        mongoose.connection.close();
    }
}

hapusData();
