import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Bookinfo from "./Bookinfo";

const Saved = () => {

    const [books, setBooks] = useState([]);

    useEffect(() =>{
        loadBooks();
    }, []);

    const loadBooks = ()=>{
        Axios.get("/api/books").then((result)=>{
            setBooks(result.data);
        }).catch((err)=>{
            console.log(err)
        })
    };

    return (
        <div className="container">
            <ul>
                {books.map((book)=>(
                    <Bookinfo
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    onSearch={this.state.onSearch}
                    saveToLibrary={this.saveToLibrary}
                    authors={book.authors}
                    description={book.description}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Saved;