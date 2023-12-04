const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://krishpatel8910:Jenil2008@cluster0.gepbkje.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("MongoDB Connection Succeeded.");
        } else {
            console.log("Error in DB connection : " + err);
        }
    }
);

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;

require("./employee.model");
