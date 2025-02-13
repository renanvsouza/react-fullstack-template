import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Fullstack React App</div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:font-bold'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:font-bold'
            }
          >
            Info
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
