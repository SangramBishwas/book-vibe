import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {
    const { name, author, image, rating, category, tags } = book;
    return (
        <div className="card bg-base-100 shadow-xl hover:border hover:border-blue-600 cursor-pointer">
            <figure className="px-10 pt-10">
                <img className='rounded-xl' src={image} />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <button className="btn">{tags[0]}</button>
                    <button className="btn">{tags[1]}</button>
                </div>
                <h3 className="font-semibold text-xl">{name}</h3>
                <p className='h-0'>By: {author}</p>
                <div className='flex justify-center border-t border-[#13131326] border-dashed py-3'>
                    <p>{category}</p>
                    <div className='flex items-center gap-1'>
                        <span>{rating}</span><span className=''><CiStar /></span>
                    </div>

                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
};

export default Book;