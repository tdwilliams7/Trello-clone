const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let items = [
  {
    text: "Clean Bathroom",
    stage: "notStarted",
    id: 99,
    checklist: [{ name: "do stuff on the server", status: false }]
  },
  {
    text: "Dust",
    stage: "InProgress",
    id: 98,
    checklist: [{ name: "do stuff on the server", status: false }]
  },
  {
    text: "Post Office",
    stage: "InProgress",
    id: 94,
    checklist: [{ name: "do stuff on the server", status: false }]
  },
  {
    text: "Make a Billion Dollars (just kiding)",
    stage: "completed",
    id: 100,
    checklist: [{ name: "do stuff on the server", status: false }]
  }
];
let id = 0;

app.use(bodyParser.json());
app.use(cors());

// reducers/index line 14
app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/item/:id", (req, res) => {
  console.log(req.params.id);
  const item = items.filter(item => {
    return item.id === Number(req.params.id);
  });
  res.json(item);
});

// reducers/index line 27
app.post("/items/post", (req, res) => {
  const item = req.body;
  const newItem = { ...item, id };
  items.push(newItem);
  console.log(items);
  res.json(items);
  id++;
});

// reducers/index line 41
app.put("/items/put", (req, res) => {
  const newItems = req.body.data;
  items = newItems.items;
  res.send(items);
});

app.listen(3333, () => {
  console.log("listening on port 3333");
});
