const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });