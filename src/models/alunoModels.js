const alunos = [
    {id: 1, nome: 'Ana', email: 'ana@email.com'},
    {id: 2, nome: 'Carlos', email: 'carlos@email.com'},
    {id: 3, nome: 'Antonio', email: 'antonio@email.com'}
]

module.exports = {
    getAll: () => alunos,
    getById: (id) => alunos.find(a => a.id = Number(id))  
}