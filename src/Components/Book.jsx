import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const { id, name, author, image, rating, category, tags } = book;
    return (
        <Link to={`./book/${id}`}>
            <div className="card bg-base-100 shadow-xl hover:border hover:border-blue-600 cursor-pointer">
                <figure className="px-10 pt-10">
                    <img className='rounded-xl' src={image} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <button className="btn bg-[#23BE0A0D] text-[#23BE0A]">{tags[0]}</button>
                        <button className="btn bg-[#23BE0A0D] text-[#23BE0A]">{tags[1]}</button>
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
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
};

export default Book;