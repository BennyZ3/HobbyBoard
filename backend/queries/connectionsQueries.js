//import db variable
const db = require("../db/dbConfig");

//createProject async function
//input(requestInfo) requestInfo {username: "", project_id: ""}
//output inserted row
const joinRequest = async (requestInfo) => {
 const { username, project_id } = requestInfo
 //try to create new join request to project_id
    try{
        const pending = await db.one("INSERT INTO connections (username, project_id, permissions) VALUES ($1, $2, $3) RETURNING *", [username, project_id, "request"])
        //return inserted row
        return pending
    } catch(err){
        //if err, return err
        return err
    }
}

module.exports = joinRequest