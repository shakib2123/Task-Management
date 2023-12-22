import { useContext } from "react";
import { FaArrowRight, FaGithub, FaGoogle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContest } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const { login, gitHubLogin, googleLogin } = useContext(AuthContest);
   const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Login Successful!");
       navigate(
         location?.state?.from?.pathname
           ? location?.state?.from?.pathname
           : "/",
         { replace: true }
       );
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const social = (media) => {
    media()
      .then((res) => {
        console.log(res);
        toast.success("Login Successful!");
       navigate(
         location?.state?.from?.pathname
           ? location?.state?.from?.pathname
           : "/",
         { replace: true }
       );
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <section className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                TaskMaster: Where Productivity Takes Center Stage.
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <IoShieldCheckmark />
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Task Management{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <IoShieldCheckmark />
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Developers{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <IoShieldCheckmark />
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Flexibility{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <IoShieldCheckmark />
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Better experience{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-gray-300 sm:text-4xl">
              Sign In
            </h2>
            <p className="mt-2 text-base text-gray-400">
              Have no account?{" "}
              <Link
                to="/register"
                className="font-medium text-gray-200  transition-all duration-200 hover:underline"
              >
                Sign Up
              </Link>
            </p>
            <form onSubmit={handleLogin} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className=" inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Sign In <FaArrowRight className="ml-3" />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                onClick={() => social(googleLogin)}
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <FaGoogle className="text-orange-600" />
                </span>
                Sign up with Google
              </button>
              <button
                onClick={() => social(gitHubLogin)}
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <FaGithub />
                </span>
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
