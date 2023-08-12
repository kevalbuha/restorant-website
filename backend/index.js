const express = require("express");
const app = express();
const port = 5000;
const mongoDb = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
   );
   next();
})

mongoDb();
app.get("/", (req, res) => {
  res.send("Hello WORLD");
});
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// ==================================

// const express = require("express");
// const app = express();
// const port = 5000;
// const mongoDB = require("./db");

// mongoDB();

// app.get("/", (req, res) => {
//   res.send("Hello WORLD");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// ==================================

// bxitaZChjbuNThPW
// mongodb+srv://gofoodmern:bxitaZChjbuNThPW@gofood.zovgkhi.mongodb.net/

// mongoimport --uri mongodb+srv://gofoodmern:bxitaZChjbuNThPW@gofood.zovgkhi.mongodb.net/gofoodmern --collection food_items --jsonArray --file "E:\myfood_data\foodCategory.json"
