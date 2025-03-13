const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require('../services/favorito')

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso")
    
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletaFavoritoPorId(id)
            res.status(201)
            res.send("Livro excluído com sucesso")
        } else {
            res.status(422)
            res.send("ID Inválido")
        }
    } catch (Error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}