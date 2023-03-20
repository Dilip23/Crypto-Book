import '../App.css';
import logo from '../assets/logo512.png'
import { FaSearch } from "react-icons/fa";
const Navbar = () =>{

    return (
        <nav className='nav'>
            <div className="container">
                <a href="/"><img src={logo} alt="Site logo" className='logo'/></a>
                <div className="search-bar">
                    <FaSearch className='search-bar-icon'/>
                    <input type='search' placeholder='Search' className='search-bar-input'/>
                </div>
                
                <button className='btn'>Create a new account</button>
                
                
            </div>
            
        </nav>
    );
}

export default Navbar;