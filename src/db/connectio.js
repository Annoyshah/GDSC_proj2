const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/GDSC_2",{

    useNewUrlParser : true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("Connection is succesful")
}).catch((e)=>{
    console.log(`${e}`)
    console.log("No connection");
});