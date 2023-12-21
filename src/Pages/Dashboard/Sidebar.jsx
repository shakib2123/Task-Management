import { useContext, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { MdAddModerator, MdWorkHistory } from "react-icons/md";
import toast from "react-hot-toast";
import { AuthContest } from "../../Provider/AuthProvider";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { user, loader, logout } = useContext(AuthContest);
  const [isActive, setActive] = useState(true);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogout = () => {
    logout().then(() => {
      toast.success("logout successfully!");
    });
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-800 z-50 text-white flex justify-between lg:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <h2 className="text-3xl md:text-4xl font-bold uppercase category-text">
              TaskMaster
            </h2>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-[1000] min-h-screen absolute lg:static flex flex-col justify-between overflow-x-hidden bg-blue-950 w-80 space-y-6 px-2 py-4  inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <h2 className="text-3xl pb-4 pl-5 md:text-4xl font-bold uppercase category-text">
            TaskMaster
          </h2> <hr />
          <NavLink
            to="/dashboard/addTask"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-700 flex gap-4 font-medium w-full items-center px-4 py-2 mt-5 text-gray-200 hover:bg-blue-700 rounded-2xl  hover:text-gray-100 transition-colors duration-300 transform"
                : "flex gap-4 font-medium w-full items-center px-4 py-2 mt-5 text-gray-200 hover:bg-blue-700 rounded-2xl  hover:text-gray-100 transition-colors duration-300 transform"
            }
          >
            <MdAddModerator className="w-5 h-5" />
            Add Task
          </NavLink>
          <NavLink
            to="/dashboard/personalTasks"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-700 flex gap-4 font-medium w-full items-center px-4 py-2 mt-5 text-gray-200 hover:bg-blue-700 rounded-2xl  hover:text-gray-100 transition-colors duration-300 transform"
                : "flex gap-4 font-medium w-full items-center px-4 py-2 mt-5 text-gray-200 hover:bg-blue-700 rounded-2xl  hover:text-gray-100 transition-colors duration-300 transform"
            }
          >
            <MdWorkHistory className="w-5 h-5" />
            Personal Task
          </NavLink>
        </div>
        <div>
          <hr />

          <div className="pt-6 flex gap-3 items-center">
            <figure className="w-14 h-14">
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
            <div>
              <h3 className="text-lg">{user?.displayName}</h3>
              <p>{user?.email}</p>
            </div>
          </div>

          <Link to="/">
            <button className="flex gap-4 font-medium w-full items-center px-4 py-2 mt-5 text-gray-200 hover:bg-blue-700 rounded-2xl  hover:text-gray-100 transition-colors duration-300 transform">
              <FaHome className="w-5 h-5" />
              Home
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="flex  w-full items-center px-4 py-2 mt-5 text-gray-200 hover:bg-blue-700 rounded-2xl  hover:text-gray-100 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
