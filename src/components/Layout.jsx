import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Layout.scss';

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
