const mongoose = require('mongoose');

// normal vs destructured
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        default: 0
    }
});

mongoose.model('users', userSchema)