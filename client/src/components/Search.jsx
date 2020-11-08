import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    books: [],
    query: "",
  };

  componentDidMount() {
     
    this.setState.books booksArray = axios.get(`https://www.googleapis.com/books/v1/volumes?q=Jaws`)
      .then((result) => {
        this.setState({
            books: result.data,
        })
        }).catch((error) => {
          console.log(error);
        });
        console.log(booksArray);
      };
  
  render() {
      <div>
    <h1>Search</h1>
    </div>
  }
}

export default Search;