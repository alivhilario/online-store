const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler} = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hey! My server in Express');
});

app.get('/new-route', (req, res) => {
    res.send('just new one');
  });

app.get('/home', (req, res) => {
    res.send('you\'are in home');
  });

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('my port' + port);
});


/**Here just get the SERVER up! */
