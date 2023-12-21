import Lottie from "lottie-react";
import manageAnime from "../assets/manage.json";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-3">
      <div className="flex-1">
        <h1 className="text-4xl text-gray-100 font-bold lg:text-7xl ">
          A <span className="text-purple-600 ">platform</span> built for a new
          way of working
        </h1>
        <p className="my-4 text-lg">
          Boost your team’s alignment, efficiency, and productivity by
          customizing any workflow to fit your needs.
        </p>
        <Link to="/dashboard">
          <button className="explore-btn w-full">Let’s Explore</button>
        </Link>
      </div>
      <div className="flex-1">
        <Lottie animationData={manageAnime} loop={true} />
      </div>
    </div>
  );
};

export default Banner;
