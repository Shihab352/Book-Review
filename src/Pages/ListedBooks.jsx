import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../Utility/localStorage";
import ReadBooks from "../Components/ReadBooks/ReadBooks";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const books = useLoaderData();
    const [booksRead , setBooksRead] = useState([])
    useEffect(()=>{
        const storedBooksId = getStoredReadBooks();
        if(books.length > 0){
         const ReadBooks = [];
         for(const id of storedBooksId){
            const book = books.find(book => book.bookId === id);
            if(book){
            ReadBooks.push(book)
            }
         }
         setBooksRead(ReadBooks);
    //    console.log(books,storedBooksId,ReadBooks)
        }
    },[])
    return (
        <div>
           <div className="flex container  justify-start items-center mx-auto   mt-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link
     to=''
     onClick={()=>setTabIndex(0)}
     ><a rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-600`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
        
		<span>Read</span>
	</a>
	</Link>
<Link
 to={`WishList`}
 onClick={()=>setTabIndex(1)}
 ><a rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===  1 ? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>WishList</span>
	</a></Link>	
    
</div>
<Outlet></Outlet>
            <div className="">
                {
                    booksRead.map(book => <ReadBooks key={booksRead.bookId} book={book}></ReadBooks>)
                }
            </div>
          
        </div>
       
    );
};

export default ListedBooks;