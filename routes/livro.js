const { Router } = require("express");
const { getLivros, getLivro } = require("../controllers/livro")

const router = Router();

router.get("/", getLivros)

router.get("/:id", getLivro)


router.post("/", (req, res) => {
    res.send("Você fez uma requisição post")
})

router.patch("/", (req, res) => {
    res.send("Você fez uma requisição patch")
})

router.delete("/", (req, res) => {
    res.send("Você fez uma requisição delete")
})

module.exports = router