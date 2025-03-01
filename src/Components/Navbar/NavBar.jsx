import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./ThemeBtn/ThemeBtn";


const NavBar = () => {
    const links = <>
        <li><NavLink className={({isActive})=> isActive ? 'border border-green-600 bg-white text-green-600        work-sans-semibold': 'work-sans-semibold' } to={"/"}>Home</NavLink></li>

        <li><NavLink className={({isActive})=> isActive ? 'border border-green-600 bg-white text-green-600    work-sans-semibold': 'work-sans-semibold' } to={"/ListedBooks"}>Listed Books</NavLink></li>

        <li><NavLink className={({isActive})=> isActive ? 'border-green-600 bg-white border text-green-600 work-sans-semibold': 'work-sans-semibold' } to={"/PagestoRead"}>Pages to Read</NavLink></li>
    </> 
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-4 fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'}><a className="btn btn-ghost work-sans-bold text-3xl">BooksReview</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn work-sans-semibold text-white bg-[#23BE0A] hover:bg-green-800">Sign in</a>
                    <a className="btn work-sans-semibold text-white bg-[#4bd4e3]">Sign up</a>
                    <ThemeBtn></ThemeBtn>
                </div>
            </div>
        </div>
    );
};

export default NavBar;