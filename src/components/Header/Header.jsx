import { Link } from "react-router-dom";
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <div className="Header1">
      <header className="site-header">
                <div className="brand">Vivekanand College</div>
                <nav className="nav-links">
                    <Link to="/home">                                            Home     </Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/admission" className="apply-btn">Apply Now!</Link>
                </nav>
           </header>
    </div>
  );
}

export default Header;