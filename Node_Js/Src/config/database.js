const mongoose = require("mongoose");


//Default MongoDB connection
// mongoose.connect('mongodb://0.0.0.0:27017/',{
//     useNewUrlParser:true,
//     useUnifiedTopology: true,
// })


//MongoDB Atlas Connection 
mongoose.connect('mongodb+srv://Iyyappan4598:Iyyappan%404598@cluster0.hgd0m3u.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

  .then(() => {
    console.log("MongoDB connected Successfully");
  })

  .catch((error) => {
    console.log(error, "MongoDB not connected Please check");
  });
  module.exports = mongoose.connection
