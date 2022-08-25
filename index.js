const express = require("express");
const app = express();


const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;

db.on('error' , () => {
    console.log("Error while connecting to database");
})

db.once('open' , () => {
    console.log("Connected to database");
});





app.listen(server_config.PORT, () => {
    console.log("listening on port " + server_config.PORT);
});

