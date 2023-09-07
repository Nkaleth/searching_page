import { NavLink } from 'react-router-dom';
import '../styles/NavBar.scss';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><NavLink to="/" exact>SEARCH BY NAME</NavLink></li>
        <li><NavLink to="favorites">FAVORITES</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
