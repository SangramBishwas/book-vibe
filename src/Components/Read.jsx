import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/localStorage";
import ReadBook from "./ReadBook";

const Read = () => {
    const books = useLoaderData();
    const [ReadBooks, setReadBooks] = useState([])
    useEffect(() => {
        const storedReadBookId = getStoredReadBook();
        if(books.length > 0){
            const readBooks = [];
            for(const id of storedReadBookId){
                const book = books.find((item) => item.id === id);
                readBooks.push(book)
            }
            setReadBooks(readBooks);
        }
    }, [])
    return (
        <div>
            {
                ReadBooks.map((item) => <ReadBook key={item.id} book={item}></ReadBook>)
            }
        </div>
    );
};

export default Read;