import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <p className="cursor-pointer text-2xl font-medium rounded-2xl p-3 shadow-xl border border-white bg-clip-text blue-gradient_text hover:scale-110 transition-all">
          SR
        </p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
