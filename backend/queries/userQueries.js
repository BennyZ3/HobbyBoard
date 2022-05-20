//Access the database that will be used
const db = require("../db/dbConfig");

// addNewUser async function
// input: user object containing [username, password, email, date, details]
// output: the newly created user as an object
const addNewUser = async (user) => {
  // destructure to get individual parameters
  let { username, password, email, date, details } = user;
  try {
    //attempt to insert into the users table
    const newUser = await db.one(
      "INSERT INTO users (username, password, email, date, details) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [username, password, email, date, details]
    );
    //return resulting user object
    return newUser;
  } catch (error) {
    //catch in case of failure
    //most likely cause should be attempting to use an existing primary key(username)
    return error;
  }
};

//confirm if username matched up with password
const findUser = async (user) => {
  let { username, password } = user;
  try {
    const user = await db.one(
      "SELECT * FROM users WHERE username=$1 AND password=$2",
      [username, password]
    );
    return user;
  } catch (error) {
    return error;
  }
};

//temp getAllUsers for testing
const getAllUsers = async () => {
  try {
    const users = await db.many("SELECT * from users");
    return users;
  } catch (error) {
    return error;
  }
};

//getOneUser (for profile?)
const getOneUser = async (name) => {
  try {
    const user = await db.one("SELECT * from users WHERE username=$1", name);
    return user;
  } catch (error) {
    return error;
  }
};

//updateUser
const updateUser = async (edits, user) => {
  const { profile_image, username, password, email, date, details } = edits;
  try {
    const editedUser = await db.one(
      "UPDATE users set username=$2, password=$3, email=$4, date=$5, details=$6, profile_image=$7 WHERE username=$1 RETURNING *",
      [user, username, password, email, date, details, profile_image]
    );
    return editedUser;
  } catch (error) {
    return error;
  }
};

module.exports = { addNewUser, getAllUsers, findUser, getOneUser, updateUser };
