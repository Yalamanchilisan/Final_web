const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Correct the file name in the require statement
const petRoutes = require("./routes/petRoutes");

const app = express();

// Correct the function call for the cors middleware
app.use(cors());

app.use(express.json());

// Ensure you have a file for categoryRoutes or correct this if it's a typo
// app.use("/api/category", categoryRoutes);

const mongoUrl = 'mongodb://localhost:27017/WoofDatabase';

mongoose.connect(mongoUrl, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB...');
});

mongoose.connection.on('error', (err) => {
    console.log("Error connecting to MongoDB:", err);
});

app.listen(4000, () => {
    console.log("App is running on PORT 4000");
});
