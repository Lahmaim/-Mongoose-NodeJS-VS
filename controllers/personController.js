// controllers/personController.js
const Person = require("../models/person");

/**
 * Create and save a single Person document
 */
const createAndSavePerson = (done) => {
    const person = new Person({
        name: "John Doe",
        age: 30,
        favoriteFoods: ["pizza", "pasta"],
    });

    person.save((err, data) => {
        if (err) return done(err);
        done(null, data);
    });
};

/**
 * Create many Person documents at once
 */
const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, people) => {
        if (err) return done(err);
        done(null, people);
    });
};

/**
 * Find all people by name
 */
const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, people) => {
        if (err) return done(err);
        done(null, people);
    });
};

/**
 * Find one person by favorite food
 */
const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, person) => {
        if (err) return done(err);
        done(null, person);
    });
};

/**
 * Find person by id
 */
const findPersonById = (personId, done) => {
    Person.findById(personId, (err, person) => {
        if (err) return done(err);
        done(null, person);
    });
};

/**
 * Find, edit, then save person by id
 */
const findEditThenSave = (personId, done) => {
    Person.findById(personId, (err, person) => {
        if (err) return done(err);
        if (!person) return done(new Error("Person not found"));

        person.favoriteFoods.push("hamburger");

        person.save((err, updatedPerson) => {
            if (err) return done(err);
            done(null, updatedPerson);
        });
    });
};

/**
 * Find one person by name and update age
 */
const findAndUpdate = (personName, done) => {
    Person.findOneAndUpdate(
        { name: personName },
        { age: 20 },
        { new: true },
        (err, updatedPerson) => {
            if (err) return done(err);
            done(null, updatedPerson);
        }
    );
};

/**
 * Remove person by id
 */
const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId, (err, removedPerson) => {
        if (err) return done(err);
        done(null, removedPerson);
    });
};

/**
 * Remove all people named Mary
 */
const removeManyPeople = (done) => {
    Person.remove({ name: "Mary" }, (err, result) => {
        if (err) return done(err);
        done(null, result);
    });
};

/**
 * Chain search query to find people who like burritos,
 * sorted by name, limited to 2, excluding age
 */
const queryChain = (done) => {
    Person.find({ favoriteFoods: "burritos" })
        .sort("name")
        .limit(2)
        .select("-age")
        .exec((err, data) => {
            if (err) return done(err);
            done(null, data);
        });
};

module.exports = {
    createAndSavePerson,
    createManyPeople,
    findPeopleByName,
    findOneByFood,
    findPersonById,
    findEditThenSave,
    findAndUpdate,
    removeById,
    removeManyPeople,
    queryChain,
};
