const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;

mongoose.connect(URI)
// .then(() => console.log("COnnected successfully"))
// .catch((err) => {console.log(err)})


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// console.log(URI)

const exerciseRoute = require('./routes/exercise')
const userRoute = require('./routes/user')

//loading the files when we hit the url from middleware

app.use('/exercises', exerciseRoute)
app.use('/users', userRoute)



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});