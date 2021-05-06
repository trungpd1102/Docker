const express = require('express');

// Constants
const PORT = 8888;

// App
const app = express();
app.get('/', (req, res) => {
    res.send("Hello World \n");
});

app.listen(PORT, () => {
    console.log("App running on port " + PORT);
});