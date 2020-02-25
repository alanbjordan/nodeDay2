const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server running on port 333');
});

app.get('/', (request, response) => {
    const snippet = `<h1>Hello, world!<h1>`;
    response 
    .status(200)
    .send(snippet)
    .end();
});

app.get('/cats', (request, response) => {
    const snippet = `<h1>Meow<h1>`;
    response 
    .status(200)
    .send(snippet)
    .end();
});

app.get('/dogs', (request, response) => {
    const snippet = `<h1>Woof<h1>`;
    response 
    .status(200)
    .send(snippet)
    .end();
});

app.get('/ccats_and_dogs', (request, response) => {
    const snippet = `<h1>Living together<h1>`;
    response 
    .status(200)
    .send(snippet)
    .end();
});


// app.get('/', (request, response) => {
//     console.log('the request is ', request);
// });

