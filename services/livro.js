const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const livro = livrosAtuais.filter(livro => livro.id === id)
    return livro
}

function insereLivro(livroNovo) {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livrosAtuais, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceExcluido = livrosAtuais.findIndex(livro => livro.id === id)

    livrosAtuais.splice(indiceExcluido, 1);
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais, null, 2));

}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}