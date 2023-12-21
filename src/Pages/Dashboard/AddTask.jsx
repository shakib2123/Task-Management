import "./AddTask.css";
import { useForm } from "react-hook-form";
const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const title = data.title;
    const date = data.date;
    const description = data.description;
    const priority = data.priority;
    const taskData = {
      title,
      date,
      description,
      priority,
    };
    console.log(taskData);
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="form-container w-full lg:w-[600px]">
        <form className="z-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Title"
              className="input input-bordered"
              required
            />
            {errors.title && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              {...register("date", { required: true })}
              className="input input-bordered"
              required
            />
            {errors.date && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              {...register("description", { required: true })}
              placeholder="Description"
              className="input input-bordered textarea-md"
              required
            />
            {errors.description && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">priority</span>
            </div>
            <select
              {...register("priority", { required: true })}
              className="select select-bordered"
              defaultValue=""
            >
              <option disabled>Pick one</option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
              <option value="optional">Optional</option>
            </select>
          </label>
          {errors.priority && (
            <span className="text-red-600">This field is required</span>
          )}

          <button type="submit" className="mt-5 task-btn w-full">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;