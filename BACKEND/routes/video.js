const express = require('express');
const router = express.Router();
const videoCtrl = require('../controllers/video');
const auth = require('../middlewares/auth');

router.get('/', videoCtrl.getAllVideos);
router.post('/', auth, videoCtrl.createVideo);
router.delete('/:id', auth, videoCtrl.deleteVideo);

module.exports = router;