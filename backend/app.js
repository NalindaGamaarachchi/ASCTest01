const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

// Correct the MongoDB Atlas URI
const mongoURI =
  "mongodb+srv://nalinda:Nalinda%40%23123@cluster0.s4vp59f.mongodb.net/filedb?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Could not connect to MongoDB Atlas:", err));

app.use(cors());
app.use(bodyParser.json());
app.use("/api/files", fileRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
