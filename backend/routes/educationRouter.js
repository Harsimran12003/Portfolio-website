const express = require('express');
const router = express.Router();
const {
  getEduExp,
  addEduExp,
  updateEduExp,
  deleteEduExp,
} = require('../controllers/educationController');

router.get('/', getEduExp);
router.post('/', addEduExp);
router.put('/:id', updateEduExp);
router.delete('/:id', deleteEduExp);

module.exports = router;
