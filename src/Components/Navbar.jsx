
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <nav className="sticky top-0 right-0 z-50 max-w-7xl mx-auto p-4 flex justify-between items-center backdrop-blur-xl rounded-b-lg lg:rounded-2xl">
                <Link to='/'>
                    <h1 className="text-2xl font-extrabold text-orange-600 tracking-tighter">Vimal</h1>
                </Link>
                <div className="flex items-center gap-4">
                    <Link to='#products' className="text-orange-950 font-bold tracking-tight hover:text-orange-900 transition-all duration-300">
                        Products
                    </Link>
                    <button className="bg-orange-600 text-white font-medium px-4 py-2 hover:bg-orange-700 rounded-lg transition-all duration-300">
                        Login
                    </button>
                </div>
            </nav>
        </>
    );
}

export default NavBar;