require('dotenv').config();
const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    pesan: String,
    tanggal: { type: Date,  default: Date.now }
});

const TestModel = mongoose.model('Test', testSchema, 'belajar_mongodb');

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        // nek tampilke semua raw
        //const semuaData = await TestModel.find({});

        // nek pengen nampilkan pesan tok
        //const semuaData = await TestModel.find({}).select('pesan');

        // tampilkan pesan tanpa objek
        const semuaData = await TestModel.find({}).select('pesan -_id');

        // nek nampilke tapi bentuk e jek json:
        //console.log('BERHASIL, ISINYA:');
        //console.log(semuaData);

        // tampilkan isine kosongan:
        console.log('Berhasil Isinya:')
        semuaData.forEach(item => {
            console.log(item.pesan)
        });

    } catch (error) {
        console.error("Error", error);
    } finally {
        await mongoose.connection.close();
    }
}

main();