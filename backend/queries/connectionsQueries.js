const db = require("../db/dbConfig");

const deleteRequest = async (id) => {
  try {
    const removeRequest = await db.one(
      "DELETE FROM connections WHERE username=$1 ",
      id
    );

    return removeRequest;
  } catch (err) {
    return err;
  }
};

module.exports = { deleteRequest };
