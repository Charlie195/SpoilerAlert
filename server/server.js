const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "database-c",
    user: "myuser",
    password: "password",
    database: "foodtracker"
    // port: "3307"
})

db.on('error', (err) => {
    console.error('MySQL Connection Error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        // Attempt to reconnect
        db.connect();
    } else {
        throw err;
    }
});

app.post("/create", (req, res) => {
    const itemName = req.body.itemName;
    const expiryDate = req.body.expiryDate;
    const dateNow = req.body.dateNow;

    db.query("INSERT INTO foods (itemName, expiryDate, dateNow) VALUES (?,?,?)", 
    [itemName, expiryDate, dateNow],
    (err, result) => {
        if (err) {
            console.log(err);
            console.log("insert");
            res.status(500).send("Error inserting values");
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
        console.log("get");
        res.status(500).send("Error retrieving data");
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
            console.log("delete");
            res.status(500).send("Error deleting data");
        } else {
            res.send(result);
        }
        });
    });


app.listen(3001, () => {
    console.log("yup");
})