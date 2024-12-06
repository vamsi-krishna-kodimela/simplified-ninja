import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="" index element={<App />}></Route>)
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
