const express = require('express')
const app = express()
const port = 3000
let data = {};

app.use(express.json());

app.put('/names/:name', (req, res) => {
    const name = req.params.name;

    if (typeof name === "undefined") {
        res.sendStatus(400);
        return;
    }

    data[name] = req.body;
    res.sendStatus(200);
})

app.get('/names/:name', (req, res) => {
    const name = req.params.name;

    if (typeof name === "undefined") {
        res.sendStatus(400);
        return;
    }

    if (typeof data[name] === "undefined") {
        res.sendStatus(404);
        return;
    }

    res.send(JSON.stringify({ name, ...data[name] }) + '\r\n');
});

app.delete('/names', (req, res) => {
    data = {};
    res.sendStatus(200);
});

app.post('/annotate', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))