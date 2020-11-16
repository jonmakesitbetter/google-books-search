const router = express.router;
const express = require("express");
const db = require("../src/components/Models/Books");

router.get("/api/books", (req, res)=>{
    db.Books.find({}).then((allBooks)=>{
        res.json(allBooks)
    }).catch((err)=>{
        console.log(err);
    });
});

router.post("/api/books", (req, res)=>{
    db.Books.create({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    }).then((saveBook)=>{
        res.json(saveBook);
    }).catch((err)=>{
        console.log(err);
    });
});

router.delete("/api/books/:id", (req, res)=>{   
    db.Books.delete(req.params.id)
    .then((deleteBook)=>{
        console.log(deleteBook);
        res.json(deleteBook);
    }).catch((err)=>{
        console.log(err);
    });
});

module.exports = router;