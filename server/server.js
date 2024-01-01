const express = require("express");
const app = express();
const mysql = require("mysql");
const { ObjectId } = require("mongodb")
const { connectToDb, getDb } = require("./connection")
const cors = require("cors");

app.use(cors());
app.use(express.json());

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(3001, () => {
            console.log("Yup")
        })
        db = getDb()
    }
})

// app.post("/create", (req, res) => {
//     const itemName = req.body.itemName;
//     const expiryDate = req.body.expiryDate;
//     const dateNow = req.body.dateNow;

//     console.log("got here")

//     db.query("INSERT INTO foods (itemName, expiryDate, dateNow) VALUES (?,?,?)", 
//     [itemName, expiryDate, dateNow],
//     (err, result) => {
//         if (err) {
//             console.log(err);
//             console.log("insert");
//             res.status(500).send("Error inserting values");
//         }
//         else {
//             res.send("Values Inserted");
//         }
//     })
// })

app.post("/create", (req, res) => {
    const foodItem = {
        itemName: req.body.itemName,
        expiryDate: req.body.expiryDate,
        dateNow: req.body.dateNow
    }
    db.collection("foods")
        .insertOne(foodItem)
        .then(result => {
            res.send("Values Inserted")
        })
        .catch(err => {
            res.status(500).json({err: "Could not create a document"})
        })
})

// app.get("/foods", (req, res) => {
//     db.query("SELECT * FROM foods", (err, result) => {
//       if (err) {
//         console.log(err);
//         console.log("get");
//         res.status(500).send("Error retrieving data");
//       } else {
//         res.send(result);
//       }
//     });
//   });

app.get("/foods", (req, res) => {
    let foods = []

    db.collection("foods")
        .find()
        .forEach(foodItem => foods.push(foodItem))
        .then(() => {
            res.send(foods)
        })
        .catch(() => {
            res.status(500).send({error: "Could not fetch the documents"})
        })
})


// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id;
//         db.query("DELETE FROM foods WHERE id = ?", id, (err, result) => {
//         if (err) {
//             console.log(err);
//             console.log("delete");
//             res.status(500).send("Error deleting data");
//         } else {
//             res.send(result);
//         }
//         });
//     });

app.delete("/delete/:id", (req, res) => {
    console.log("I'm here")
    console.log(req.params.id)
    if (ObjectId.isValid(req.params.id)) {
        db.collection("foods")
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).json({error: "Could not delete the document"})
        })
    } else {
        res.status(500).json({error: "Not a valid ObjectID"})
    }
})