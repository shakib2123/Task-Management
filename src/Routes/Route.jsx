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
import PrivateRoute from "../Private/PrivateRoute";
import Profile from "../Pages/Dashboard/Profile";
import About from "../Pages/About/About";
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
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "addTask",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "personalTasks",
        element: (
          <PrivateRoute>
            <PersonalTask />
          </PrivateRoute>
        ),
      },
      {
        path: "editTask/:id",
        element: (
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Route;
