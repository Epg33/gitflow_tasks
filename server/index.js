const express = require('express');
const app = express();
const mongo = require('./database/database')

const PORT = 4000;

app.use('/' , require('./routers/tasks.routes'))

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})