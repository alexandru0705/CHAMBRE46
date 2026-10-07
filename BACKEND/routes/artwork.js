const express = require('express');
const router = express.Router();
const artworkCtrl = require('../controllers/ctrlArtwork');
const auth = require('../middlewares/auth');
const { upload, optimiseImage } = require('../middlewares/multer');

router.get('/', artworkCtrl.getAllArtworks);
router.get('/:id', artworkCtrl.getOneArtwork);
router.post('/', auth, upload, optimiseImage, artworkCtrl.createArtwork);
router.delete('/:id', auth, artworkCtrl.deleteArtwork);

module.exports = router;