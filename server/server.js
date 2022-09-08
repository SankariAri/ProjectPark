const express = require('express');
const path = require('path');
const authRouter = require('./routes/authRouter')

const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});


/**
 * 404 handler
 */
 app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });