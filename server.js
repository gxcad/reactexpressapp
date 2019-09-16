const express = require('express');

const app = express();

const port = 5000;

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstname: 'Ken', lastName: 'Kenderson'},
    {id: 2, firstname: 'Johnny', lastName: 'Johnnish'},
    {id: 3, firstname: 'Joeyjoejoe', lastName: 'Jahubalah'},
  ];

  res.json(customers);
})

app.listen(port, () => console.log(`server listening on port ${port}`));