import PropTypes from 'prop-types';
import { GrLocation } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
const List = ({ list }) => {
    const {image, name, author, category, totalPages, publisher, yearOfPublishing, rating, tags} = list;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-8">
                <figure><img src={image} className='w-[350px] h-[350px]' alt="Movie" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>By: {author}</p>
                    <div className='flex gap-5 mb-4 items-center'>
                        <h4 className='font-bold'>Tag</h4>
                        <button className='btn text-[#23BE0A] bg-[#FFAC3326]'>#{tags[0]}</button>
                        <button className='btn text-[#23BE0A] bg-[#FFAC3326]'>#{tags[1]}</button>
                        <p className='flex items-center gap-2'><GrLocation className='text-lg' /> <span>Year Of Publishing: {yearOfPublishing}</span></p>
                    </div>
                    <div className='flex mb-4 items-center w-1/2'>
                    <p className='flex items-center gap-2'><GoPeople className='text-lg' /> <span className='font-semibold text-[#13131399]
                        '>Publisher: {publisher}</span></p>
                        <p className='flex items-center gap-2'><HiOutlineDocumentChartBar className='text-lg' /><span className='font-semibold text-[#13131399] '>Pages: {totalPages}</span></p>
                    </div>
                    <div className='flex gap-5 mb-4 items-center'>
                        <button className='btn bg-[#328EFF26]'>Category: {category}</button>
                        <button className='btn bg-[#FFAC3326]'>Ratings: {rating}</button>  
                        <button className="btn bg-[#23BE0A] text-xl text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

List.propTypes = {
    list: PropTypes.object.isRequired
};

export default List;