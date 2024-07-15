import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('Books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
   
    return (
        <div>
            <h1 className="playfair-bold text-[40px] my-20 text-center">Books  </h1>

           <div className="grid grid-cols-3 gap-8">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
           </div>
        </div>
    );
};

export default Books;