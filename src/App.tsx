import GlobalStyles from "./components/utils/GlobalStyling";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import Headphones from "./components/Pages/Headphones";
import Speakers from "./components/Pages/Speakers";
import Earphones from "./components/Pages/Earphones";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/HEADPHONES",
        element: <Headphones />,
      },
      {
        path: "/SPEAKERS",
        element: <Speakers />,
      },
      {
        path: "/EARPHONES",
        element: <Earphones />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
