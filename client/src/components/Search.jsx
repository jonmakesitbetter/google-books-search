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

  render() {
    return (
        <div>
            
        </div>
    );
}
  
  }

export default Search;
