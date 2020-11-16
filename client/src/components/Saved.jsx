import React from 'react';
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
        });
    };

    return (
        <div>
            
        </div>
    );
};

export default Saved;