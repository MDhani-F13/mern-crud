const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pengunjungSchema = new Schema({
  id_pengunjung: {
    type: String,
    required: true,
    unique: true
  }, nama: {
    type: String,
    required: true
  }, alamat: {
    type: String,
    required: true
  }, nomor_hp: {
    type: String,
    required: true
  },pekerjaan: {
    type: String,
    required: true
  },judul_buku: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});

const Pengunjung = mongoose.model('Pengunjung', pengunjungSchema);

module.exports = Pengunjung;