import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";



const Home = () => {
    return (
        <div>
            <div className="h-16">
            <NavBar></NavBar>
            </div>
            <Outlet></Outlet>

            
        </div>
    );
};

export default Home;