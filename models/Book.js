const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  author: {
      type: String,
      trim: true
  },
  description: {
      type: String,
      trim: true
  },
  image: {
    type: String,
    trim: true
  },
  link: {
      type: Schema.Types.ObjectId,
      trim: true
  },
  creatorId: {
      type: Schema.Types.ObjectId,
      trim: true
  }


});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;