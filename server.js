const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let items = [{ text: 'Clean Bathroom', stage: 'notStarted', id: 99 }, { text: 'Dust', stage: 'InProgress', id: 98 }, { text: 'Post Office', stage: 'InProgress', id: 94 }, { text: 'Make a Billion Dollars', stage: 'completed', id: 100 }];
let id = 0;

app.use(bodyParser.json())
app.use(cors())

// reducers/index line 14
app.get('/items', (req, res) => {
  res.send(items)
})

// reducers/index line 27
app.post('/items/post', (req, res) => {
  const item = req.body;
  const newItem = {...item, id};
  items.push(newItem);
  console.log(items);
  res.send(items);
  id++;
})

// reducers/index line 41
app.put('/items/put', (req, res) => {
  const newItems = req.body.data;
  items = newItems.items;
  res.send(items);
});

app.listen(3333, () => { console.log("listening on port 3333")})
