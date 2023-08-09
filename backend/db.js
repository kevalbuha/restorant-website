// const mongoose = require('mongoose');
// const mongoURL =
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// ================================
// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://gofoodmern:bxitaZChjbuNThPW@gofood.zovgkhi.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   await mongoose.connect(
//     mongoURI,
//     { userNewUrlPaeser: true },
//     (err, result) => {
//       if (err) {
//         console.log("eror-->", err);
//       } else {
//         console.log("coonected sucessfully");
//       }
//     }
//   );
// };
// export default mongoDB

// module.exports = mongoDB;
// ==================================

const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gofoodmern:bxitaZChjbuNThPW@gofood.zovgkhi.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log("Connected to MongoDB successfully");

    const fetched_data = mongoose.connection.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCatagory = mongoose.connection.collection("foodCatagory")
    const dataCategory = await foodCatagory.find({}).toArray();

    global.good_items = data
    global.foodCatagoryData = dataCategory
    // console.log(global.good_items,"==>");
    // console.log("Fetched data:", data); 

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } 
};

module.exports = mongoDB;


// ===========================================

// const connectionString = 'mongodb://goFood>:L2vhFFw8j7EDqYtb@localhost:27017/goFood';

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB successfully!');
//     // Start your application logic here
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
