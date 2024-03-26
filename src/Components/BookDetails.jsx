import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);
    const book = books.find((item) => item.id === idInt);
    const { name, image, author, category, review, rating, totalPages, yearOfPublishing, publisher, tags } = book;
    return (
        <div>
            <div className="hero h-3/4 bg-base-200 mt-12">
                <div className="hero-content items-center flex-col lg:flex-row">
                    <div className="h-full">
                        <img src={image} className="max-w-sm h-full rounded-lg shadow-2xl " />
                    </div>
                    <div>
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold">{name}</h1>
                            <p className="font-bold">By: {author}</p>
                        </div>
                        <div className="border-y-2 p-2 mt-3">
                            <h3 className="font-semibold">{category}</h3>
                        </div>
                        <p className="py-5"><span className="font-bold"> Review: </span> {review}</p>
                        <div className="pb-5 border-b-2 p-5">
                            <button className="btn bg-[#23BE0A0D] text-[#23BE0A] text-xl">#{tags[0]}</button>
                            <button className="btn bg-[#23BE0A0D] text-xl ml-4 text-[#23BE0A]">#{tags[1]}</button>
                        </div>
                        <div className="flex items-center gap-24 mt-5">
                            <span>Number of pages:</span>
                            <span className="font-bold">{totalPages}</span>
                        </div>
                        <div className="flex items-center gap-24 mt-5">
                            <span>Publisher:</span>
                            <span className="font-bold">{publisher}</span>
                        </div>
                        <div className="flex items-center gap-24 mt-5">
                            <span>Year of Publishing:</span>
                            <span className="font-bold">{yearOfPublishing}</span>
                        </div>
                        <div className="flex items-center gap-48 my-5">
                            <span>Rating:</span>
                            <span className="font-bold">{rating}</span>
                        </div>
                        <div className="flex gap-5">
                        <button className="btn bg-transparent border-2 border-[#1313134D] text-xl">Read</button>
                        <button className="btn bg-[#50B1C9] font-semibold] font-semibold text-xl">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;