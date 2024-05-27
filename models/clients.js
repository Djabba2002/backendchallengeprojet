const mongoose = require("mongoose");


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clientSchema = new mongoose.Schema({
    nomComplet: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    objet: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [emailRegex, 'Please fill a valid email address']
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Client", clientSchema);