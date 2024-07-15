import { Link } from 'react-router-dom';
import BannerImg from '../images/91063813_Books_stacked_-15-removebg-preview.png'

const Banner = () => {
    return (
        <div>
           <div className='flex gap-6 items-center bg-[#1313130D] px-[120px] rounded-[30px]'>
            <div>
                <h1 className='playfair-bold  text-6xl'>Books are a uniquely portable magic.</h1>
                <Link to={'/ListedBooks'}><button className="btn work-sans-bold text-xl bg-[#23BE0A] text-white mt-20 hover:bg-green-800">  View The List</button></Link>
            </div>
            <div>
                <img className='h-[600px]' src={BannerImg} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Banner;