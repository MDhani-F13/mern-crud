const router = require('express').Router();
let Buku = require('../models/buku.model');

router.route('/').get((req, res) => {
  Buku.find()
    .then(buku => res.json(buku))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const kode_seri = req.body.kode_seri;
  const judul_buku = req.body.judul_buku;
  const genre = req.body.genre;
  const author = req.body.author;

  const newBuku = new Buku({ kode_seri, judul_buku, genre, author });

  newBuku.save()
    .then(() => res.json('Buku added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Buku.findById(req.params.id)
    .then(buku => res.json(buku))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Buku.findByIdAndDelete(req.params.id)
    .then(() => res.json('Buku deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Buku.findById(req.params.id)
    .then(buku => {
      buku.kode_seri = req.body.kode_seri;
      buku.judul_buku = req.body.judul_buku;
      buku.genre = req.body.genre;
      buku.author = req.body.author;

      buku.save()
        .then(() => res.json('Buku updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;