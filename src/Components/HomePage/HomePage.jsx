import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const HomePage = () => {
    return (
        <div className="my-20 container mx-auto">
            <Banner></Banner>
           <div className="my-20">
            <Books></Books>
           </div>
        </div>
    );
};

export default HomePage;