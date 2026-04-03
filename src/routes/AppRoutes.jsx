import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
]);

export default router;
