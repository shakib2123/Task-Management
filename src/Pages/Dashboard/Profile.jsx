import { useContext } from "react";
import "./Profile.css";
import { AuthContest } from "../../Provider/AuthProvider";
const Profile = () => {
  const { user } = useContext(AuthContest);
  return (
    <div className=" w-full flex justify-center my-16">
      <div className="cards w-80 h-96">
        <div className="circles"></div>
        <div className="circles"></div>
        <div className="card-inners z-50 p-4">
          <figure className="flex w-full justify-center">
            <img
              className="mask mask-hexagon-2 object-cover"
              src={user?.photoURL}
              alt="user"
            />
          </figure>
          <h1 className="text-white text-2xl font-medium">
            Name: {user?.displayName}
          </h1>
          <p className="text-xl text-gray-200 font-medium">
            Email: {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
