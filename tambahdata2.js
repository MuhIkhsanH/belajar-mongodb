require('dotenv').config();
const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    pesan: String,
    tanggal: { type: Date, default: Date.now }
});

const TestModel = mongoose.model('Test', testSchema, 'belajar_mongodb');

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const hasil = await TestModel.create({
            pesan: "Halo ini pesan keempat dari nodejs"
        });

        console.log('BERHASIL COY')

    } catch (eror) {
        console.eror("Terjadi eror", error);
    } finally {
        await mongoose.connection.close();
    }
}

main();