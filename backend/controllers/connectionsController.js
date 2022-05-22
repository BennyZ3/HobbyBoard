const express = require("express")
const connections = express()
const joinRequest = require("../queries/connectionsQueries")

//Send join request
connections.post("/", async(request, response) => {
    console.log("Post /connections")
    const pending = await joinRequest(request.body)
    response.status(200).json(pending);
})

module.exports = connections