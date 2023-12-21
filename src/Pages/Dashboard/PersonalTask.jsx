import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import Swal from "sweetalert2";
const PersonalTask = () => {
  const { loader } = useContext(AuthContest);
  const axios = useAxios();
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loader,
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await axios.get("/tasks");
      return res.data;
    },
  });
  const toDos = tasks.filter((task) => task.status === "to-do");
  const onGoing = tasks.filter((task) => task.status === "ongoing");
  const Completed = tasks.filter((task) => task.status === "completed");
  console.log(toDos);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/tasks/${id}`).then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };
  return (
    <div>
      <div className="bg-blue-950 p-4 rounded-2xl flex justify-between items-center w-full lg:w-[820px]">
        <h1 className="text-2xl text-gray-300 font-bold uppercase">Tasks</h1>
        <Link to="/dashboard/addTask">
          <button className="flex items-center gap-3 bg-blue-800 px-5 py-3 rounded-2xl outline-none font-semibold">
            Add New
            <FaPlus />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">
        {/* To Do */}
        <div className="bg-teal-600 rounded-2xl border border-gray-400 p-4">
          <p className="text-white text-xl font-bold flex gap-2 items-center">
            <MdCheckBoxOutlineBlank /> To Do
          </p>
          <hr />
          {toDos.map((toDo) => (
            <div key={toDo._id}>
              <div className="rounded-xl my-4 bg-secondary text-primary-content group">
                <div className="card-body">
                  <div className="transition-transform  duration-1000 card-actions  flex flex-row justify-end gap-4">
                    <button
                      onClick={() => handleDelete(toDo._id)}
                      className="text-lg text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button className="text-lg text-amber-700">
                      <FaEdit />
                    </button>
                  </div>
                  <h2 className="text-lg font-medium">{toDo?.title}</h2>
                  <h2 className="text-lg font-medium text-yellow-700">
                    Date: {toDo?.date}
                  </h2>
                  <p>{toDo?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Ongoing  */}
        <div className="bg-pink-600 rounded-2xl border border-gray-400 p-4">
          <p className="text-white text-xl font-bold flex gap-2 items-center">
            <BiSolidTimeFive /> ongoing
          </p>
          <hr />
          {onGoing.map((going) => (
            <div key={going._id}>
              <div className="rounded-xl my-4 bg-secondary text-primary-content group">
                <div className="card-body">
                  <div className="transition-transform  duration-1000 card-actions  flex flex-row justify-end gap-4">
                    <button
                      onClick={() => handleDelete(going._id)}
                      className="text-lg text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button className="text-lg text-amber-700">
                      <FaEdit />
                    </button>
                  </div>
                  <h2 className="text-lg font-medium">{going?.title}</h2>
                  <h2 className="text-lg font-medium text-yellow-700">
                    Date: {going?.date}
                  </h2>
                  <p>{going?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-600 rounded-2xl border border-gray-400 p-4">
          <p className="text-white text-xl font-bold flex gap-2 items-center">
            <MdCheckBox /> Complete
          </p>
          <hr />
          {Completed.map((complete) => (
            <div key={complete._id}>
              {" "}
              <div className="rounded-xl my-4 bg-secondary text-primary-content group">
                <div className="card-body">
                  <div className="transition-transform  duration-1000 card-actions  flex flex-row justify-end gap-4">
                    <button
                      onClick={() => handleDelete(complete._id)}
                      className="text-lg text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button className="text-lg text-amber-700">
                      <FaEdit />
                    </button>
                  </div>
                  <h2 className="text-lg font-medium">{complete?.title}</h2>
                  <h2 className="text-lg font-medium text-yellow-700">
                    Date: {complete?.date}
                  </h2>
                  <p>{complete?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalTask;
