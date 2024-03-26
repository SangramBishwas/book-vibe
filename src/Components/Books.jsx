import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div className="w-full grid grid-cols-3 gap-20 gap-y-10 my-20">
            {books.map((book) => <Book
            key={book.id}
            book={book}></Book>
            )}
        </div>
    );
};

export default Books;