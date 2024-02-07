const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Enable CORS


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema for form data
const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const FormData = mongoose.model("FormData", FormDataSchema);



// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).send("Form data saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving form data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
