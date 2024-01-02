const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Enrico, This a 2024 version!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
