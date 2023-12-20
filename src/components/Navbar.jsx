import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-gray-900 route-btn text-gray-200  hover:bg-gray-800"
            : isPending
            ? "pending"
            : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/archived"
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-gray-900 route-btn text-gray-200  hover:bg-gray-800"
            : isPending
            ? "pending"
            : ""
        }
      >
        Archived
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-gray-900 route-btn text-gray-200  hover:bg-gray-800"
            : isPending
            ? "pending"
            : ""
        }
      >
        About
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdOutlineMenu className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md  shadow-purple-600 bg-purple-950 rounded-box w-52 space-y-5"
            >
              {navLinks}
            </ul>
          </div>
          <img src="/logo.jpg" alt="logo" className="w-10 md:w-16 rounded-xl" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2   menu menu-sm dropdown-content rounded-box w-52 space-y-4 bg-purple-950 shadow-lg shadow-purple-700"
            >
              <li>
                <span className="name-text text-md font-bold">Shakib</span>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 route-btn text-gray-200  hover:bg-gray-800"
                      : "bg-purple-900 border border-purple-700"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button className="logout-btn">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
