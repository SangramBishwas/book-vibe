import { Link } from 'react-router-dom';
import bannerPic from '../assets/bannerPic.png'

const Banner = () => {
    return (
        <div className="mt-10">
            <div className="hero h-3/4 bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerPic} className=" bg-[#1313130D] max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/listed&books'>
                            <button className="btn text-xl bg-[#23BE0A] text-white">View the list</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;