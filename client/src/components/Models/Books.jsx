const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: "Please enter a title."
    },
    author:{
        type: Array,
        trim: true
    },
    image:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    image:{
        type: String,
        trim: true
    },
    link:{
        type: String,
        trim: true
    }
});

const Books = mongoose.model("Book", BooksSchema);
module.exports = Books;
