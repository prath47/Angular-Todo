const {Schema, model} = require('mongoose');

const todoShema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    completed: {
        type: Boolean,
        default: false
    },
    userEmail: {
        type: String,
        required: true
    }
});

module.exports = model('Todo', todoShema);