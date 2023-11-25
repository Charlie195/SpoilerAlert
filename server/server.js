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
    database: "foodtracker"
})

app.post("/create", (req, res) => {
    const itemName = req.body.itemName;
    const expiryDate = req.body.expiryDate;
    const dateNow = req.body.dateNow;

    db.query("INSERT INTO foods (itemName, expiryDate, dateNow) VALUES (?,?,?)", 
    [itemName, expiryDate, dateNow],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values Inserted");
        }
    })
})

app.get("/foods", (req, res) => {
    db.query("SELECT * FROM foods", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
        db.query("DELETE FROM foods WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
        });
    });


app.listen(3001, () => {
    console.log("yup");
})