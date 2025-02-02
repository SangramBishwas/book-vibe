import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const ListedBooks = () => {
    const [tabActive, setTabActive] = useState(0)
    return (
        <div>
            <div className="flex justify-center items-center py-6 bg-base-200 my-6 rounded-xl">
                <h1 className="font-bold text-3xl">Books</h1>
            </div>
            <div className="dropdown flex justify-end">
                <div tabIndex={0} role="button" className="btn m-1 text-lg">SORT</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Ratings</a></li>
                    <li><a>Year Of Publishing</a></li>
                </ul>
            </div>
            <div role="tablist" className="w-1/3 tabs tabs-lifted tabs-lg">
                <Link
                    to={'read'}
                    onClick={() => setTabActive(0)}
                    role="tab" className={`${tabActive === 0 ? 'tab tab-active' : 'tab'}`}>Read</Link>
                <Link
                    to={'wishlist'}
                    onClick={() => setTabActive(1)}
                    role="tab" className={`${tabActive === 1 ? 'tab tab-active' : 'tab'}`}>Wishlist</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default ListedBooks;