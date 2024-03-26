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
        <div className="my-20">
            <h2 className="font-bold text-3xl text-center">Books</h2>
            <div className="w-full grid grid-cols-3 gap-20 gap-y-10 my-5">
                {books.map((book) => <Book
                    key={book.id}
                    book={book}></Book>
                )}
            </div>
        </div>

    );
};

export default Books;