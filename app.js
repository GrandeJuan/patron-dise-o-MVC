const express = require('express');
const app = express();
const path = require ('path');

let rutasMain = require ('./routers/main.js');

app.use(express.static(path.resolve(__dirname, './public')));

app.use ('/', rutasMain);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});