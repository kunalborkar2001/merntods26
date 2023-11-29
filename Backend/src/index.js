const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./Config/config");
const app = express();
const totoList = require("./Routes/todoList.routes")

// Use cors as a middleware
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// Define a route for the root path
app.get("/", (req, res) => {
    res.send("kunal");
});


app.use("/todos" , totoList)


// Connect to MongoDB
mongoose.connect(config.mongoose.url)
    .then(() => {
        console.log("MongoDb is connected");

        // Start the Express app on the specified port
        app.listen(config.port, () => {
            console.log(`App is running on port ${config.port}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });
