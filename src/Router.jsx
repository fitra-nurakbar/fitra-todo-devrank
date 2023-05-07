import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Detail from "@/pages/detail";
import NotFound from "@/components/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "detail/:todoId",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
