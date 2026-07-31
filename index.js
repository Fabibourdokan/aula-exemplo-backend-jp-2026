import express from 'express' // TYPE MODULE
// const express = require("express")// type common JS

//inicializando o express - new
const app = express()

app.get("/api/somar", (req, res) => {
    // const exemplo = "batata" (não pode ser alterada) 
    // let exemploAlterar = 1
    // exemploAlerar = "batata" (pode alterar)
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({"message": num1 + num2 })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})