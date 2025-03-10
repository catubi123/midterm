const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Write your full name' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
