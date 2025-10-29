const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
res.send('<h1>Hello from Node.js App deployed via Jenkins and Docker!</h1>');
});


app.listen(PORT, '0.0.0.0', () => {
console.log(`App running on port ${PORT}`);
});