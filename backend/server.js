//loads our .env file for using the values in it
require('dotenv').config();
//always load env files before anything else to avoid undefined error
const express = require('express');
//require is needed for importing a library
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();
//Middleware is code that runs between the request coming in 
// and the response going out.These lines set up middleware for our server.
app.use(cors());
//allows react frontend to talk to this server
app.use(express.json());
//allows server to read JSON sent from frontend
app.use('/api/tasks', taskRoutes);
//when someone visits /api/tasks,taskRoutes will handle the request

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
//connects to our atlas database
    .then(() => console.log('Connected to MongoDB!'))
    //runs if connections succeeds
    .catch((err) => console.log('Connection failed:', err));
    //runs if connection fails in case of wrong pw/no internet

app.get('/',(req,res) => {
res.json({message:'Focus Flow API is running!'});
});
//When someone visits the homepage,respond with JSON

const PORT = process.env.PORT || 5000;
//uses env value or uses default value of 5000
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
//server starts,listening on port 5000