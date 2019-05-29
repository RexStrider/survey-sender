const mongoose = require('mongoose');

// normal vs destructured
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: {
        type: String,
        required: true
    }
});

mongoose.model('users', userSchema)