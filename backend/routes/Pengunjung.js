const router = require('express').Router();
let Pengunjung = require('../models/pengunjung.model');

router.route('/').get((req, res) => {
  Pengunjung.find()
    .then(buku => res.json(buku))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id_pengunjung = req.body.id_pengunjung;
  const nama = req.body.nama;
  const alamat = req.body.alamat;
  const nomor_hp = req.body.nomor_hp;
  const pekerjaan = req.body.pekerjaan;
  const judul_buku = req.body.judul_buku;
  const newPengunjung = new Pengunjung({ id_pengunjung, nama, alamat, nomor_hp, pekerjaan, judul_buku });
  newPengunjung.save()
    .then(() => res.json('Pengunjung added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Pengunjung.findById(req.params.id)
    .then(buku => res.json(buku))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Pengunjung.findByIdAndDelete(req.params.id)
    .then(() => res.json('Pengunjung deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Pengunjung.findById(req.params.id)
    .then(Pengunjung => {
      pengunjung.id_pengunjung = req.body.id_pengunjung;
      pengunjung.nama = req.body.nama; 
      pengunjung.alamat = req.body.alamat; 
      pengunjung.nomor_hp = req.body.nomor_hp; 
      pengunjung.pekerjaan = req.body.pekerjaan;
      pengunjung.judul_buku = req.body.judul_buku;
      pengunjung.save()
        .then(() => res.json('Pengunjung updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;