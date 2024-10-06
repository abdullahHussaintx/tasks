import { Layout1 } from "../layout/Layout1";
import { Task1 } from "../pages/Task1";
import { Task2 } from "../pages/Task2";
import { Task3 } from "../pages/Task3";

export const tasksRoutes = [
  {
    path: "/tasks/",
    element: <Layout1 />,
    children: [
      {
        path: "1",
        element: <Task1 />,
      },
      {
        path: "2",
        element: <Task2 />,
      },
      {
        path: "3",
        element: <Task3 />,
      },
    ],
  },
];
