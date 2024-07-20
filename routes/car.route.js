const express = require('express');
const Car = require('../models/carModel.js');

const router = express.Router();

// Route to register a new car
router.post("/register", async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.status(201).send("Car has been added");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding car");
    }
});

// Route to get all cars
router.get("/", async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching cars");
    }
});

// Route to delete a car by id
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCar = await Car.findByIdAndDelete(id);

        if (!deletedCar) {
            return res.status(404).send("Car not found");
        }

        res.status(200).send("Car has been deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting car");
    }
});

module.exports = router;
