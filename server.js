const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const items = [{ text: 'Clean Bathroom', stage: 'notStarted', id: 99 }, { text: 'Dust', stage: 'InProgress', id: 98 }, { text: 'Post Office', stage: 'InProgress', id: 94 }]

app.use(bodyParser.json())

app.get('/items', (req, res) => {
  res.send(items)
})


app.listen(3333, () => { console.log("listening on port 3333")})
