import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks } from "../../Utility/localStorage";
import Tags from '../Tags/Tags';
const BookDetails = () => {
    const books = useLoaderData();
    const {id}= useParams();
    
    const book = books.find(book  => book.bookId == id);
    const{bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;

    const handleRead = ()=>{
        saveReadBooks(parseInt(id));
        toast("Added To Read Successfully");
    }

    const handleWishlist = ()=>{
        saveReadBooks(parseInt(id));
        toast ('Added To Wishlist Successfully');
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 mt-10 container mx-auto dark:bg-gray-300 p-6 ">
  <figure>
    <img
    className="dark:bg-gray-500 h-[450px]"
      src={image}
      alt="Album" />
  </figure>
  <div className=" ml-9 space-y-3">
    <h2 className=" playfair-bold text-4xl">{bookName}</h2>
    <p className="work-sans-medium text-xl">By : {author}</p>
    <p className="work-sans-medium text-xl py-2 border-y-2 border-dashed border-slate-500">{category}</p>
    <p><span className="work-sans-bold">Review : </span>{review}</p>
    <div className='flex gap-3 items-center'>
        <p className="work-sans-bold">Tag:</p>
{
    tags.map((tag,idx) => <Tags key={idx} tag={tag}></Tags> )
}
</div>
<div className="flex gap-5 py-4 border-t border-slate-600">
<div className="space-y-2">
    <p className="work-sans-regular text-slate-800">Number Of Pages: </p>
    <p className="work-sans-regular text-slate-800">Publisher:</p>
    <p className="work-sans-regular text-slate-800">Year Of Publishing:</p>
    <p className="work-sans-regular text-slate-800">Rating:</p>
</div>
<div  className="space-y-2">
    <p className="work-sans-semibold text-slate-800">{totalPages}</p>
    <p className="work-sans-semibold text-slate-800">{publisher}</p>
    <p className="work-sans-semibold text-slate-800">{yearOfPublishing}</p>
    <p className="work-sans-semibold text-slate-800">{rating}</p>
</div>
</div>
   <div  >
    <button onClick={handleRead} className="btn work-sans-semibold text-lg text-black mr-8">Read</button>
    <button onClick={handleWishlist} className="btn work-sans-semibold text-lg text-white bg-[#50B1C9]">Wishlist</button>
   </div>
    
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default BookDetails;