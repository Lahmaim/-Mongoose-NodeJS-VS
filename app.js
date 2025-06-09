// app.js
const connectDB = require("./config/db");
const {
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
} = require("./controllers/personController");

// Connect to DB first
connectDB();

// Example: Create and save a person
createAndSavePerson((err, data) => {
    if (err) return console.error(err);
    console.log("Created Person:", data);

    // Add more test calls here...
});
