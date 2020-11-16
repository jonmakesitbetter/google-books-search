import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class Search extends Component {
  state = {
    books: [],
    query: "",
    onSearch: true,
  };

  handleInputChange = (e) => {
    const title = e.target.value;
    this.setState({ query: title });
  };

  handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (this.state.query) {
      let searchBooks = this.state.query;
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${searchBooks}`)
        .then((result) => {
          this.setState({
            books: result.data.items,
          });
        });
      console.log(this.state.books);
    } else {
      this.componentDidMount();
    }
  };

  saveToLibrary = (bookId) => {
    const savedBook = this.state.books.filter((book) => {
      return book.id === bookId;
    });
    const book = savedBook[0].volumeInfo;

    axios
      .post("/api/books", {
        title: book.title,
        author: book.author,
        description: book.description,
        image: book.image,
        link: book.link,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Search Books</label>
            <input
              type="text"
              claclassNamess="form-control"
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <ul>
          {this.state.books.map((book)=>(
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
  }
}

export default Search;
