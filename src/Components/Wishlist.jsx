import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../utility/localStorage";
import { useEffect, useState } from "react";
import List from "./List";


const Wishlist = () => {
    const lists = useLoaderData();
    const [Wishlists, setWishlist] = useState([])
    useEffect(() => {
        const storedWishlistId = getStoredWishlist();
        if (lists.length > 0) {
            const wishlist = [];
            for (const id of storedWishlistId) {
                const list = lists.find((list) => list.id === id);
                wishlist.push(list)
            }
            setWishlist(wishlist);
        }
    }, [])
    return (
        <div>
            {Wishlists.map((list) => <List key={list.id} list={list}></List>)
            }
        </div>
    );
};

export default Wishlist;