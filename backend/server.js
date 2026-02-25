const express = require('express');
//require is needed for importing a library
const cors = require('cors');
const mongoose = require('mongoose');
//loads our .env file for using the values in it
require('dotenv').config();

const app = express();

app.use(cors());
//allows react frontend to talk to this server
app.use(express.json());
//allows server to read JSON sent from frontend

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)//connects to our atlas database
    .then(() => console.log('Connected to MongoDB!'))//runs if connections succeeds
    .catch((err) => console.log('Connection failed:', err));//runs if connection fails in case of wrong pw/no internet

app.get('/',(req,res) => {
res.json({message:'Focus Flow API is running!'});
});
//When someone visits the homepage,respond with JSON

const PORT = process.env.PORT || 5000//uses env value or uses default value of 5000
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
//server starts,listening on port 5000