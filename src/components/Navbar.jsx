import { NavLink } from 'react-router-dom';
import '../styles/NavBar.scss';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><NavLink to="/" exact>Search by Name</NavLink></li>
        <li><NavLink to="favorites">Favorites</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
