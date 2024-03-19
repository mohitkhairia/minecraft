const mongoose = require('mongoose');



const connectDatabase = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/minecraft", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MongoDB Database connected`);
    })
}


module.exports = connectDatabase;