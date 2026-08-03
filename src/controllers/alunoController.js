const alunoModel = require('../models/alunoModels');

const getAlunos = (req, res) => {
    const alunos = alunoModel.getAll();
    res.json(alunos);
}

const getAlunosById = (req, res) => {
    const aluno = alunoModel.getById(req.params.id);
    if (!aluno) {
        return req.status(404).json({error: 'Aluno não encontrado!'})
    } else {
        res.json(aluno);
    }
}

module.exports = {getAlunos, getAlunosById};