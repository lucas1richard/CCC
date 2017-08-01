const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${ 3000}`));

app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', require('./routes/curl'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'browser/index.html'));
});

app.use((req, res, next) => {
  console.log(`404 - ${req.url} was not found`);
  next();
});

app.use((req, res, next, err) => {
  console.log(err);
});
