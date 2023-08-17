const mongoose = require('mongoose');
let dblink = "mongodb+srv://sameerk132:utsavUTSAV@myfreecluster.fshcqmm.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(dblink)
    .then(function () {
        console.log("connected");
    })
    .catch(function (err) {
        console.log("error", err);
    })

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: "String",
        minLength: 10,
        maxLength: 10
    },
    pic: {
        type: String,
        default: "dp.png"
    },
    address: {
        type: String,
    }
})

const UserModel = mongoose.model('FooduserModel', userSchema);
module.exports = UserModel;
