const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bukuSchema = new Schema({
  kode_seri: {
    type: String,
    required: true,
    unique: true
  },judul_buku: {
    type: String,
    required: true
  },genre: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

const Buku = mongoose.model('Buku', bukuSchema);

module.exports = Buku;