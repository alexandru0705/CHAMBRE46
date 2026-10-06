const express = require('express');
const router = express.Router();
const trackCtrl = require('../controllers/track');
const auth = require('../middlewares/auth');

router.get('/', trackCtrl.getAllTracks);
router.post('/', auth, trackCtrl.createTrack);
router.delete('/:id', auth, trackCtrl.deleteTrack);

module.exports = router;