const express = require("express");
const router = express.Router();
const db = require("../models/Book");

router.get("/api/books", (req, res) => {
    db.Books.find({})
      .then((foundBooks) => {
        res.json(foundBooks);
      })
      .catch((err) => {
        console.log(err),
          res.json({
            error: true,
            data: null,
            message: "Failed to retrieve books",
          });
      });
  });

router.post("/api/books", (req, res) => {
  db.Book.create(req.body)
    .then((saveBooks) => {
      res.json(saveBooks);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Could not post book."
        });
    });
});

router.delete("/api/books/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id)
  .then((deleteBooks) =>{
      res.json(deleteBooks);
  })
  .catch((err) =>{
      console.log(err),
      res.json({
          error: true,
          data: null,
          message: "Could not delete selected book."
      });
  });
})

module.exports = router;