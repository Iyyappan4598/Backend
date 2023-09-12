const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

  .then(() => {
    console.log("mongo db connected Successfully");
  })

  .catch((error) => {
    console.log(error, "MongoDB not connected ");
  });
  module.exports = mongoose.connection
