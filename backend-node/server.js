const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SPRING_BOOT_API = "http://localhost:8080/api/auth"; // Spring Boot Backend URL

// API to register users
app.post("/register", async (req, res) => {
    try {
        const response = await axios.post(`${SPRING_BOOT_API}/register`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user, please try again later" });
    }
});

// API to login users
app.post("/login", async (req, res) => {
    try {
        const response = await axios.post(`${SPRING_BOOT_API}/login`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Invalid login credentials, please check your details" });
    }
});

// Dynamic port assignment
const PORT = process.env.PORT || 5001; // Fallback to 5001 if 5000 is in use
app.listen(PORT, () => {
    console.log(`Node.js server running on port ${PORT}`);
});
