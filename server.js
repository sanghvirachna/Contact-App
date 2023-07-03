const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)
connectDb();
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})