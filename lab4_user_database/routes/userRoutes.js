const express = require('express');
const router = express.Router();
const { User } = require('../model/models.js');

// route: POST /api/v1/emp/employees
// create employee
router.post('/', 
    async (req, res) => {
    try {
        
        const newUser = new User({ ...req.body });

        await newUser.save(); // persist to db

        // on success
        const user = await User.findOne({ username: req.body.username })
        if(!user) res.status(404).json({ message: "User created but cannot be retrieved."})

        res.status(201).json({
            message: "User created successfully", 
            data: user
        });
        
    } catch (err) {
        res.status(500).send({ 
            message: "Employee creation failed", 
            status: 'Status 500: internal server error', 
            error: err 
        });
    }
});

module.exports = router;
