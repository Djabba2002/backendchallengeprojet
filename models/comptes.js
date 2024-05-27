const mongoose = require("mongoose");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const compteSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [emailRegex, 'Please fill a valid email address'],
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v); // Assuming a 10 digit phone number
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long'],
    },
    confirmedpassword: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return v === this.password;
            },
            message: 'Confirmed password does not match password'
        },
    }
});

module.exports = mongoose.model("compte", compteSchema);