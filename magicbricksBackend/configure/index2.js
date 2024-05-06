const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeModel = require('./models/employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/shopy_ecom", );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    EmployeModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("the password is incorrect");
                }
            } else {
                res.json("no record existed");
            }
        })
        .catch(err => {
            console.error("Login error:", err);
            res.status(500).json("Internal Server Error");
        });
});

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    // Check if the email already exists in the database
    EmployeModel.findOne({ email })
        .then(existingEmployee => {
            if (existingEmployee) {
                // If the email already exists, send an error response
                return res.status(400).json("Email already exists");
            } else {
                // If the email does not exist, create a new employee entry
                EmployeModel.create({ name, email, password })
                    .then(newEmployee => {
                        console.log("New employee registered:", newEmployee);
                        res.json(newEmployee);
                    })
                    .catch(err => {
                        console.error("Registration error:", err);
                        res.status(500).json("Internal Server Error");
                    });
            }
        })
        .catch(err => {
            console.error("Error checking email existence:", err);
            res.status(500).json("Internal Server Error");
        });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});