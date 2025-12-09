import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

const About = lazy(() => import("./Components/About/About.jsx"));
const Projects = lazy(() => import("./Components/Projects/Projects.jsx"));
const Resume = lazy(() => import("./Components/Resume/Resume.jsx"));

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
