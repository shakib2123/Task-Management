import Swal from "sweetalert2";
import useAxios from "../useAxios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";
const ToDoItem = ({ toDo: item, refetch, type, index, onDropToDo }) => {
  const axios = useAxios();

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

  const [{ isDraggble }, dragRef] = useDrag({
    type: type,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult && item) {
        onDropToDo(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className="rounded-xl my-4 bg-secondary text-primary-content group"
      ref={dragRef}
     
    >
      <div className="card-body">
        <div className="transition-transform  duration-1000 card-actions  flex flex-row justify-end gap-4">
          <button
            onClick={() => handleDelete(item._id)}
            className="text-lg text-red-700"
          >
            <FaTrash />
          </button>
          <Link to={`/dashboard/editTask/${item._id}`}>
            <button className="text-lg text-amber-700">
              <FaEdit />
            </button>
          </Link>
        </div>
        <h2 className="text-lg font-medium">{item?.title}</h2>
        <h2 className="text-lg font-medium text-yellow-700">
          Date: {item?.date}
        </h2>
        <p className="text-lg text-gray-700 font-bold">
          Priority: {item?.priority}
        </p>
        <p>{item?.description}</p>
      </div>
    </div>
  );
};

export default ToDoItem;
