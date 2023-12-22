import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask";
import PersonalTask from "../Pages/Dashboard/PersonalTask";
import EditTask from "../Pages/EditTask";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addTask",
        element: <AddTask />,
      },
      {
        path: "personalTasks",
        element: <PersonalTask />,
      },
      {
        path: "editTask/:id",
        element: <EditTask />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
      },
    ],
  },
]);

export default Route;
