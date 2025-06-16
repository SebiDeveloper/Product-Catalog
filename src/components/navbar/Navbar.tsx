import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link navbar__link--logo">
        Home 🏠
      </Link>
      <Link to="/cart" className="navbar__link navbar__link--cart">
        🛒
      </Link>
    </nav>
  );
};

export default Navbar;