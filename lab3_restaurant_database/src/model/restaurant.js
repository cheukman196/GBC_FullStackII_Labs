const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    "cuisines": {
        type: String, 
        required: true,
        enum: ['Japanese', 'Bakery', 'Delicatessen', 'Indian', 'Mexican', 
            'Italian', 'Chinese', 'French', 'Other']  
    },
    "name": {
        type: String, 
        required: true, 
        unique: true,
        minlength: 2,
        maxlength: 50,
        validate: function(){
            var nameRegex = /^[a-zA-Z\s]*$/;
            return nameRegex.test(this.name);
        }        
    },
    "city": {
        type: String, 
        required: true, 
        minlength: 2,
        maxlength: 50,
        validate: function(){
            var cityRegex = /^[a-zA-Z\s]*$/;
            return cityRegex.test(this.name);
        }        
    },
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
