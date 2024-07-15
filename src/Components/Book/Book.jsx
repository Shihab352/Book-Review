import PropTypes from 'prop-types'; 
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';
const Book = ({book}) => {
    const {bookName, author, image, rating, category,tags,bookId} = book;
    return (
        <div>
           <Link to={`/book/${bookId}`}>
           <div className="p-6 h-[570px] rounded-md shadow-xl dark:bg-gray-300 dark:text-gray-900">
	<img src={image} alt="" className=" w-full rounded-md h-72 dark:bg-gray-500" />
   
	<div className="mt-6 mb-2 border-b-2 border-dashed pb-5 border-gray-600">
<div className='flex gap-3 '>
{
    tags.map((tag,idx) => <Tags key={idx} tag={tag}></Tags> )
}
</div>
		<span className=" text-2xl playfair-bold tracking-widest uppercase dark:text-black">{bookName}</span>
		<h2 className="text-xl work-sans-medium tracking-wide">By : {author}</h2>
	</div>
	<div className='flex justify-between mt-7'>
        <p className='work-sans-medium text-lg'>{category}</p>
        <p className='flex items-center gap-2 work-sans-medium text-lg'>{rating} <FaRegStar /></p>
    </div>
</div>  
           </Link>
        </div>
    );
};

Book.propTypes = {
    book : PropTypes.object,
}
export default Book;