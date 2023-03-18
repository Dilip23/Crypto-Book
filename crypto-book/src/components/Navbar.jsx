import '../App.css';
import { FaGithub } from "react-icons/fa";
const Navbar = () =>{

    return (
        <nav className='nav'>
            <a href="/" className="site-title">Crypto Book</a>
            <a href="https://github.com/Dilip23/Crypto-Book"><FaGithub className='github-logo'/></a>
        </nav>
    );
}

export default Navbar;