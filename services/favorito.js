const fs = require('fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livrosFiltrados = livros.filter( livro => livro.id !== id )

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereFavorito(idNovoFavorito) {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const novoFavorito = livrosAtuais.filter( livro => livro.id === idNovoFavorito )

    const novaListaDeFavoritos = [...livrosFavoritos, novoFavorito]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}