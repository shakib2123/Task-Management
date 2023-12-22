
const Ongoing = () => {
    return (
      <div className="rounded-xl my-4 bg-secondary text-primary-content group">
        <div className="card-body">
          <div className="transition-transform  duration-1000 card-actions  flex flex-row justify-end gap-4">
            <button
              onClick={() => handleDelete(going._id)}
              className="text-lg text-red-700"
            >
              <FaTrash />
            </button>
            <Link to={`/dashboard/editTask/${going._id}`}>
              <button className="text-lg text-amber-700">
                <FaEdit />
              </button>
            </Link>
          </div>
          <h2 className="text-lg font-medium">{going?.title}</h2>
          <h2 className="text-lg font-medium text-yellow-700">
            Date: {going?.date}
          </h2>
          <p className="text-lg text-gray-700 font-bold">
            Priority: {going?.priority}
          </p>
          <p>{going?.description}</p>
        </div>
      </div>
    );
};

export default Ongoing;