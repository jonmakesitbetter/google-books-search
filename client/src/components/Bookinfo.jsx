import React from 'react';
import Axios from "axios";

const Bookinfo = (props) => {

    const showBook = ()=>{
        let path = props.link;
        window.open(path);
    };

    const deleteBook = (e)=>{
        const id = e.target.getAttribute(id);

        Axios.delete(`/api/books/${id}`).then((result)=>{
            console.log(result)
            props.loadBooks();
        })
    }
    return (
        <div>
           <li id={props.id}>
               <h2>{props.title}</h2>
               <img src={props.thumbnail} alt={props.title}/>
               <h4>Author: {props.authors}</h4>
               <p>{props.description}</p>
               <button className="btn btn-primary" onClick={showBook}>See more about this book!</button>
               {props.onSearch ? (
                   <button className="btn btn-primary" onClick={()=>props.saveToLibrary(props.id)}>Save to your library</button>
               ) : (
                   <button className="btn btn-danger" onClick={deleteBook}>Delete</button>
               )
               }
           </li>
        </div>
    );
};

export default Bookinfo;