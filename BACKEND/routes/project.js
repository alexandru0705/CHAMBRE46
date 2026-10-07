const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/ctrlProject');
const auth = require('../middlewares/auth');
const { upload, optimiseImage } = require('../middlewares/multer');

router.get('/', projectCtrl.getAllProjects);
router.get('/:id', projectCtrl.getOneProject);
router.post('/', auth, upload, optimiseImage, projectCtrl.createProject);
router.delete('/:id', auth, projectCtrl.deleteProject);

module.exports = router;