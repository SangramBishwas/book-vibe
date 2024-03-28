import { toast } from "react-toastify";
const getStoredReadBook = () => {
    let books = []
    const storedReadBook = localStorage.getItem('read-books');
    if (storedReadBook) {
        return JSON.parse(storedReadBook);
    }
    return books;
}

const savedReadBooks = (id) => {
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find((bookId) => bookId === id);
    if(exists){
        toast.error('Already added to read');
    }
    else if (!exists) {
        toast.success('Added to read')
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
}

const getStoredWishlist = () => {
    let books = []
    const storedWishlist = localStorage.getItem('wish-list');
    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    }
    return books;
}

const savedWishlist = (id) => {
    const storedWishlists = getStoredWishlist();
    const exists = storedWishlists.find((bookId) => bookId === id);
    if (!exists) {
        storedWishlists.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishlists));
        toast.success('Added to Wishlist')
    }
}

const removedWishlist = (id) => {
    const storedWishlists = getStoredWishlist();
    const existing = storedWishlists.filter((bookId) => bookId !== id);
    localStorage.setItem('wish-list', JSON.stringify(existing))
}

export { getStoredReadBook, savedReadBooks, getStoredWishlist, savedWishlist, removedWishlist };