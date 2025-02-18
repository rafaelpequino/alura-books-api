const fs = require('fs')

function getTodosLivros () {
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroPorId (id) {
    const livrosAtuais = JSON.parse( fs.readFileSync("livros.json") )
    const livro = livrosAtuais.filter( livro => livro.id === id )
    return livro
}

function insereLivro (livroNovo) {
    const livrosAtuais = JSON.parse( fs.readFileSync("livros.json") )

    const novaListaDeLivros = [ ...livrosAtuais,  livroNovo ]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro (modificacoes, id) {
    let livrosAtuais = JSON.parse( fs.readFileSync("livros.json") )
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado;
    
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro
}