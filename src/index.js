const express = require ('express');

const app = express();

app.post("/account", (request, response) => {
    const cpf = request.body;
});



app.listem(3333);