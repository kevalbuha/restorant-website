// const mongoose = require('mongoose');
// const mongoURL =
// mongoose.connect('mongodb://127.0.0.1:27017/test');

const mongoose = require('mongoose');

const connectionString = 'mongodb://goFood>:L2vhFFw8j7EDqYtb@localhost:27017/goFood';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    // Start your application logic here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });