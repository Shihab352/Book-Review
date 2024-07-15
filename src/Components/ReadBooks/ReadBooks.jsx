import { CiLocationOn } from "react-icons/ci";
import Tags from '../Tags/Tags';
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { MdFindInPage } from "react-icons/md";
import PropTypes from 'prop-types';

const ReadBooks = ({book}) => {
  const {bookName,author,image,totalPages,rating,category,tags,publisher,yearOfPublishing} = book ;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mt-10 container mx-auto p-6 ">
  <figure>
    <img
    className="h-[200px]"
      src={image}
      alt="Movie" />
  </figure>
  <div className="space-y-3">
    <h2 className="card-title playfair-bold text-2xl">{bookName}</h2>
    <p className="work-sans-medium text-lg text-[#131313CC]">By : {author}</p>
<div className="flex gap-3">
{
    tags.map((tag,idx) => <p  key={idx}>
      
      <Tags tag={tag}></Tags> 
      </p>)
}
      <p className="flex items-center gap-3"><CiLocationOn />Year of Publishing : {yearOfPublishing}</p>
</div>
   <div className="flex gap-3">
   <p className="flex  items-center gap-2 work-sans-regular"><BsFillFileEarmarkPersonFill />Publisher: {publisher}</p>
   <p className="flex  items-center gap-2 work-sans-regular"><MdFindInPage /> Page : {totalPages}</p>
   </div>
    <div className="card-actions items-center">
      <p className="work-sans-regular text-[#328EFF] py-2 px-4 bg-[#328EFF26] rounded-full">Category : {category}</p>
      <p className="work-sans-regular text-[#FFAC33] p-2 bg-[#FFAC3326] rounded-full">Rating : {rating}</p>
      <button className="btn work-sans-medium text-lg text-[white] bg-[#23BE0A] rounded-full">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};
ReadBooks.propTypes = {
  book : PropTypes.object,
}
export default ReadBooks;