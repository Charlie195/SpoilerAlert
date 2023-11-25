const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "spoiler_alert_send"
})

app.post("/create", (req, res) => {
    const food = req.body.food;
    const expiryDate = req.body.expiryDate;

    db.query("INSERT INTO sent_data (food, expiryDate) VALUES (?,?)", 
    [food, expiryDate],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values Inserted");
        }
    })
})


app.listen(3001, () => {
    console.log("yup");
})