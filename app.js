const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const carRoute = require('./routes/car.route.js')

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors({origin: "http://localhost:3000", credentials: true}));

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, {}).then(() => {
    console.log("MongoDB connection established");
}).catch((err) => console.log("MongoDB connection failed: ", err.message));


app.use("/api/car", carRoute);

app.listen(PORT, (req, res) => {
    console.log(`Server running on PORT: ${PORT}`);
})