import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MainLayout from "./layouts/MainLayout/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path="" index element={<MainLayout />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
