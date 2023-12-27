const express = require('express')
const morgan = require('morgan')
const apiRouter = require('./routes')

const port = 8070;

const app = express();

app.use(morgan('dev'))

app.use(express.json())

app.use(apiRouter)

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500)
    .json({ name: err.name, msg: err.message || 'Server error.' });
});

app.listen(8080, () => console.log('Server listening on port ' + port + "..."));