import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home/Home";
import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

const About = lazy(() => import("./Components/About/About"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const Resume = lazy(() => import("./Components/Resume/Resume"));

const Loading = ({ children }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <div>Page Not Found</div>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/about",
          element: (
            <Loading>
              <About />
            </Loading>
          ),
        },
        {
          path: "/projects",
          element: (
            <Loading>
              <Projects />
            </Loading>
          ),
        },
        {
          path: "/resume",
          element: (
            <Loading>
              <Resume />
            </Loading>
          ),
        },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
