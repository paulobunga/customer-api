const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGODB || "mongodb://localhost:27017/customer_database";

mongoose.connect(DB, {
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

const customerCtrl = require("./customer.controller");

app.use(express.json());
app.use(express.urlencoded());

app.get("/customers", customerCtrl.getCustomers);
app.get("/customer/:customerId", customerCtrl.getCustomerDetails);
app.post("/customer/:customerId", customerCtrl.updateCustomerDetails);
app.post("/customers", customerCtrl.createCustomer);

app.listen(3000, () => console.log("App is running on port 3000"));
