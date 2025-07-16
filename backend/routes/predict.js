const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { predictDisease } = require('../controllers/predictController');

router.post('/predict', upload.single('file'), predictDisease);

module.exports = router;
