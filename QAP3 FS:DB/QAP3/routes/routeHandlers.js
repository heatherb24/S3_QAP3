// routeHandlers.js

const User = require("../models/user"); // Assuming you have a User model

async function getUsers(req, res) {
  try {
    const users = await User.findAll(); // Fetch users from the database using your data access layer (DAL) method

    res.render("users", { users }); // Pass the retrieved users to the EJS template
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
}

module.exports = {
  getUsers,
};
