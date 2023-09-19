const mongoose = require ('mongoose');
mongoose.connect('mongodb: 0.0.0.0:27017',{

})
.then(()=>{
    console.log("Mongo DB connected Successfully")
})
.catch((error)=>{
    console.log(error,"Mongo DB Not connected")
})