// importa o express
const express = require("express");

// inicia o express
const app = express();

// define a porta
const port = 8000

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})