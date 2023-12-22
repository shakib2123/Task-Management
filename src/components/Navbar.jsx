import { MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContest } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

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
    <li>
      <NavLink
        to="/dashboard/addTask"
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-gray-900 route-btn text-gray-200  hover:bg-gray-800"
            : isPending
            ? "pending"
            : ""
        }
      >
        Dashboard
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logout } = useContext(AuthContest);
  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logout successful!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="bg-blue-950 shadow-md shadow-blue-800">
      <nav className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdOutlineMenu className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md  shadow-blue-600 bg-blue-950 rounded-box w-52 space-y-5"
            >
              {navLinks}
            </ul>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase category-text">
            TaskMaster
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="logout-btn">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
