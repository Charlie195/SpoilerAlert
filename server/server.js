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

app.delete("/delete/:id", (req, res) => {
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