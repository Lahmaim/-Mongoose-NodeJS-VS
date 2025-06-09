// models
const mongoose = require("mongoose");

// Define schema for Person
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
