const express = require('express');
require('dotenv').config()

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
    res.send("Hello World \n");
});

app.listen(PORT, () => {
    console.log("App running on port " + PORT);
});

console.log(process.env.DB_USERNAME, process.env.DB_PWD)
console.log('Port sử  dụng là ' + process.env.PORT)