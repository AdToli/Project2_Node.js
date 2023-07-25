const express = require('express');
const router = express.Router()
const usersBLL = require("../BLLs/usersBLL")


// localhost:8000/depart

//GET - get all users
router.get("/", async (req, res) => {
    try {
        const users = await usersBLL.getAllUsers()
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({ error: "Failed in: usersRout --> GET--> getAllUsers()" })
    }

})

// GET - user by id
router.get("/:EmpId", async (req, res) => {
    try {
        const { EmpId } = req.params
        const user = await usersBLL.getUserById(EmpId)

        //validation
        if (!user) { res.status(404).json({ error: "user not found --> usersRout --> GET --> getUserById()" }) }  //--> right ID ?
        res.status(200).json({user})

    } catch (error) {
        res.status(500).json({ error: "Failed in: usersRout --> GET --> getEmpById() " })
    }

})

// // POST - 
router.post("/", async (req, res) => {
    try {

        res.status(405).json({ error: "Users collection can be change directly from DB or server side only." })
    }
    catch (error) {
        res.status(500).json({ error: "Failed in: usersRout --> POST --> addUser()" })
    }
})


// // PUT - 
router.put("/:EmpId", async (req, res) => {
    try {

        res.status(405).json({ error: "Users collection can be deleted only directly from DB." })
    }
    catch (error) {
        res.status(500).json({ error: "Failed in: usersRout --> PUT --> updateUser()" })
    }
})


// // DELETE - 
router.delete("/:EmpId", async (req, res) => {
    try {

        res.status(405).json({ error: "Users collection can be deleted only directly from DB." })
    }
    catch (error) {
        res.status(500).json({ error: "Failed in: usersRout --> DELETE --> deleteUser()" })
    }
})