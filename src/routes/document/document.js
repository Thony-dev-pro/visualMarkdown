const express = require('express');
const router = express.Router();
const { getDocuments } = require('../../controllers/DocumentController');

router.get('/', getDocuments);

module.exports = router;