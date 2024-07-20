const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    car: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
    },
    vin: {
        type: String,
        required:true,
        unique: true
    },
    mileage: {
        type: Number,
        required:true,
    },
    picturelink: {
        type: String,
        required:true,
    },
    picturelink2: {
        type: String,
        required:true,
    },
    picturelink3: {
        type: String,
    },
    picturelink4: {
        type: String,
    },
    picturelink5: {
        type: String,
    },
    secondhand: {
        type: Boolean,
        required:true,
    },
    extcolor: {
        type: String,
        required:true,
    },
    intcolor: {
        type: String,
        required:true,
    },
    drivetrain: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    },
}, {
    timestamps: true,
})

const carModel = mongoose.model("Car", carSchema)

module.exports = carModel;