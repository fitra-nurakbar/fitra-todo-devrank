import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Detail from "@/pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "detail/:todoId",
    element: <Detail />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
