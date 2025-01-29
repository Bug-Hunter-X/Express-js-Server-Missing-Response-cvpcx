const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Missing res.send() or res.json() to send a response
  console.log('Request received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));