import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/JS-RemoteFR-SACOD-P2-Thousand-Sunny/",
        element: <Home />,
      },
      {
        path: "/JS-RemoteFR-SACOD-P2-Thousand-Sunny/quiz",
        element: <Quiz />,
      },
      {
        path: "/JS-RemoteFR-SACOD-P2-Thousand-Sunny/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
