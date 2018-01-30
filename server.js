const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let items = [{ text: 'Clean Bathroom', stage: 'notStarted', id: 99 }, { text: 'Dust', stage: 'InProgress', id: 98 }, { text: 'Post Office', stage: 'InProgress', id: 94 }];
let id = 0;

app.use(bodyParser.json())
app.use(cors())

app.get('/items', (req, res) => {
  res.send(items)
})

app.post('/items/post', (req, res) => {
  const item = req.body;
  items = items.concat({ ...item, id });
  res.send(items);
  id++;
})

app.listen(3333, () => { console.log("listening on port 3333")})
