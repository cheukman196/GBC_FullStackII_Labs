const express = require('express');
const router = express.Router();
const Restaurant = require('../model/restaurant.js');
const { isValidObjectId } = require('mongoose');


// Lab Step 4 & 6

// route: GET /restaurants
// get all restaurants
// route: GET /restaurants?sortBy=xxx
// get all restaurants sorted by ASC or DESC
router.get('/restaurants', async (req, res) => {
    
    try {

        // add sorting condition if exists
        const sortBy = req.query.sortBy;
        let condition = {};

        if(sortBy == 'ASC')
            condition = { sort: {_id: 1} } // sort id ascending
        else if(sortBy == 'DESC')
            condition = { sort: {_id: -1} } // sort id descending
        
        const restaurants = await Restaurant.find(null, null, condition);
        res.status(200).send(restaurants);
        
    } catch (err) {

        res.status(500).send({ 
            message: "Restaurant retrieval failed", 
            status: 'Status 500: internal server error', 
            error: err 
        });
    }
});

// Lab Step 5

// route: GET /restaurants/cuisine/2
// get restaurants by 'cuisines' type
router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    
    try {

        // add sorting condition if exists
        const cuisine = req.params.cuisine;

        const restaurants = await Restaurant.find({cuisines: cuisine});
        res.status(200).send(restaurants);
        
    } catch (err) {

        res.status(500).send({ 
            message: "Restaurant retrieval failed", 
            status: 'Status 500: internal server error', 
            error: err 
        });
    }
});

// Lab Step 7

// route: GET /restaurants/cuisine/2
// get restaurants by 'cuisines' type
router.get('/restaurants/Delicatessen', async (req, res) => {
    try {

        const restaurants = await Restaurant.find({
            cuisines: 'Delicatessen',
            city: { $ne: 'Brooklyn' } // except Brooklyn
        }, ['name', 'city', 'cuisines'],
        { sort: {name: 1} }); 
        res.status(200).send(restaurants);
        
    } catch (err) {

        res.status(500).send({ 
            message: "Restaurant retrieval failed", 
            status: 'Status 500: internal server error', 
            error: err 
        });
    }
});


// route: POST /restaurant
// create restaurant
router.post('/restaurants', async (req, res) => {
    try {

    const newRestaurant = new Restaurant(req.body); 
    await newRestaurant.save(); // persist to db

    // on success
    res.status(201).json({
        message: "Restaurant created successfully", 
        data: newRestaurant.toJSON()
    });
    
    } catch (err) {
        res.status(500).send({ 
            message: "Restaurant creation failed", 
            status: 'Status 500: internal server error', 
            error: err 
        });
    }
});

// route: DELETE /restaurant/:id
// delete restaurant by id
router.delete('/restaurants/:id', async (req, res) => {
    try {
        // check format of id matches mongodb _id
        if(!isValidObjectId(req.params.id))
            return res.status(400).send({status: false, message: `Restaurant ID is invalid.`});

        const restaurant = await Restaurant.findOne({_id: req.params.id});
        if(!restaurant){
            return res.status(404).send({status: false, message: `Restaurant #${req.params.id} found.`});
        } else {
            // delete and return message
            const deletedRestaurant = await Restaurant.findOneAndDelete({_id: req.params.id});
            return res.status(204).send({status: true, message: `Restaurant '${deletedRestaurant._id}' deleted successfully `});
        }

    } catch (err) {
        res.status(500).send({ 
            message: "Restaurant delete failed", 
            status: 'Status 500: internal server error', 
            error: err 
        });
    }
});

module.exports = router;
