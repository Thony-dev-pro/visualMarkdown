const express = require('express');
const router = express.Router();
const documentRoutes = require('./document/document');

router.use('/documents', documentRoutes);

module.exports = router;