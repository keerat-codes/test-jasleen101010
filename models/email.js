const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
email : { type:  String, description: "Required Field", required: true },
age : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('email', emailSchema);