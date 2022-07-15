import {Link} from "react-router-dom"
import About from "../routes/about"
import Contact from "../routes/contact";

const Nav = () => {
    return (
        <div className="nav-container">
            <Link to="/about">
                <About />
            </Link>
            <Link to="/contact">
                <Contact/>
            </Link>

        
        </div>
    );
}

export default Nav;