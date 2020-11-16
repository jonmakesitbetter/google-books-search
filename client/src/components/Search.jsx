import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class Search extends Component {
    state = {
        books: [],
        query: "",
        onSearch: true,
    };

    handleInputChange = (e)=> {
      const title = e.target.value;
      this.setState({query: title})
    }

    handleSubmit = (e)=>{
      if(e){
        e.preventDefault();
      };
      if(this.state.query) {
      let searchBooks = this.state.query;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((result) => {
        this.setState({
          books: result.data.items
      });
    });
    console.log(this.state.books);
    } else {
      this.componentDidMount();
    }
  };

  saveToLibrary = (bookId) =>{
    const savedBook = this.state.books.filter(book => {
      return book.id === bookId
    });
    const book = savedBook[0].volumeInfo;

    axios.post("/api/books", {
      title: book.title,
      author: book.author,
      description: book.description,
      image: book.image,
      link: book.link
    })
  }

  render() {
    return (
        <div>
            
        </div>
    );
}
  
  }

export default Search;
