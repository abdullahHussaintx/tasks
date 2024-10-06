import { createBrowserRouter } from "react-router-dom";

import { homeScreenRoutes } from "./homeScreenRoute";
import { tasksRoutes } from "./taskRoutes";

const allRoutes = [...homeScreenRoutes, ...tasksRoutes];

export const router = createBrowserRouter(allRoutes);
