import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={Route} />
          <Toaster />
        </DndProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
