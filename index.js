import express from 'express' // TYPE MODULE
// const express = require("express")// type common JS

//inicializando o express - new
const app = express()
app.use(express.json())
//1. Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
app.post("/api/somar", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({"message": num1 + num2 })
})

//2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
app.post("/api/salario", (req, res) => {
    const valorGanho = req.body.valorGanho
    const horaTrabalhada = req.body.horaTrabalhada
    res.send({message: valorGanho * horaTrabalhada})
})

// 3. Peça o peso de 5 pessoas e calcule a média desses pesos.
app.post("/api/mediapeso", (req, res) => {
    const P1 = req.body.p1;
    const P2 = req.body.p2;
    const P3 = req.body.p3;
    const P4 = req.body.p4;
    const P5 = req.body.p5;
    
    const media = (P1 + P2 + P3 + P4 + P5) / 5;
    
    res.send({ message: `A média dos pesos é ${media}`});
});

//4. Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
app.post("/api/graus", (req, res) => {
    const c = req.body.c;
    const F = (9 * c + 160) / 5
    
    res.send({
        message: `${c}°C é o mesmo que ${F}°F`
    });
});

//5. Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
app.get("/api/distancia/:milhas", (req, res) => {
    const milhas = Number(req.params.milhas);
    const km = milhas * 160934
    
    res.send({
        message: `A distância de ${milhas} é ${km} em KM`
    });
});

//6. Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
app.get("/api/tempo/:segundos", (req, res) => {
    const totalSegundos = Number(req.params.segundos);

    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    res.send({
        message: `${totalSegundos} segundos equivalem a ${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s).`
    });
});

//7. Peça uma distância em quilômetros e converta para metros e centímetros.
app.get("/api/distancia2/:km", (req, res) => {
    const km = Number(req.params.km);

    const metros = Number(km * 1000);
    const centimetros = Number(km * 100000);

    res.send({
        message: `${km}KM tem ${metros} metros, e ${centimetros} centimetros.`
    });
});

// 8. Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).

app.get("/api/numero/:n", (req, res) => {
    const n = Number(req.params.n);

    const tabuada = [];

    for (let i = 0; i <= 10; i++) {
        tabuada.push(`${n} x ${i} = ${n * i}`);
    }

    res.send({
        numero: n,
        tabuada: tabuada
    });
});




app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})