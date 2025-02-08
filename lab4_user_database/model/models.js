const mongoose = require('mongoose');

const GeoSchema = new mongoose.Schema({
    "lat": {type: Number, required: true },
    "lng": {type: Number, required: true },
})
const Geo = mongoose.model("Geo", GeoSchema)

const AddressSchema = new mongoose.Schema({
    "street": {type: String, required: true },
    "suite": {type: String, required: true },
    "city": {
        type: String, 
        required: true,
        match: [
            /^[A-Za-z\s]+$/,
            'Please only enter letters and space.'
        ]

    },
    "zipcode": { 
        type: String, 
        required: true,
        match: [
            /^\d{5}-\d{4}$/,
            'Only allow format: 11111-1111'
        ] },
    "geo": {type: GeoSchema, required: true},
})
const Address = mongoose.model("Address", AddressSchema);

const CompanySchema = new mongoose.Schema({
    "name": {type: String, required: true },
    "catchPhrase": {type: String, required: true },
    "bs": {type: String, required: true },
})
const Company = mongoose.model("Company", CompanySchema)

const UserSchema = new mongoose.Schema({
    "name": {type: String, required: true },
    "username": {type: String, required: true, unique: true, minLength: 4},
    "email": {
        type: String,
        required: true, 
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
            'Please enter a valid email address'
        ]

    },
    "address": { type: AddressSchema, required: true} ,
    "phone": { 
        type: String, 
        required: true,
        match: [
            /^\d-\d{3}-\d{3}-\d{4}$/,
            'Only allow format: 1-111-111-1111'
        ] 
    },
    "website": { 
        type: String, 
        required: true,
        match: [
            /^https?:\/\//,
            'Only websites beginning with "http://" or "https://" are allowed'
        ] 
    },
    "company": { type: CompanySchema, required: true },
})
const User = mongoose.model("User", UserSchema);


module.exports = { User, Address, Geo, Company };

