import Lottie from "lottie-react";
import errorAnime from "../assets/error-404.json";
import "./Error.css";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5 items-center justify-center">
      <Lottie animationData={errorAnime} loop={true} />\
      <div className="space-y-8">
        <h3 className="text-center text-4xl text-gray-300">
          Sorry We don&apos;t found the page!!
        </h3>
        <div className="flex flex-row items-center justify-around">
          <Link to="/">
            <button className=" error-btn">Go Home</button>
          </Link>
          <Link to={-1}>
            <button className=" error-btn">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
