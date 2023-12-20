import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navLinks = (
  <>
    <li>
      <NavLink>Home</NavLink>
    </li>
    <li>
      <NavLink>About</NavLink>
    </li>
    <li>
      <NavLink>Home</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdOutlineMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-5"
          >
            {navLinks}
          </ul>
        </div>
          <img src="/logo.jpg" alt="logo" className=" w-16 rounded-xl" />
         
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
