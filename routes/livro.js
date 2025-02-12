const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    try {
        res.send("Hello world")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

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