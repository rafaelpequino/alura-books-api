const fs = require('fs')

function getTodosLivros () {
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroPorId (id) {
    const livros = JSON.parse( fs.readFileSync("livros.json") )
    const livro = livros.filter( livro => livro.id === id )
    return livro
}


module.exports = {
    getTodosLivros,
    getLivroPorId
}