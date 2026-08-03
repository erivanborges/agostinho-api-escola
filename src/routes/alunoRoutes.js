const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.getAlunos);
router.get('/:id', alunoController.getAlunosById);

module.exports = router;