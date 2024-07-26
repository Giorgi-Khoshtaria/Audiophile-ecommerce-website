import GlobalStyles from "./components/utils/GlobalStyling";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import Headphones from "./components/Pages/Headphones";
import Speakers from "./components/Pages/Speakers";
import Earphones from "./components/Pages/Earphones";
// import Products from "./components/Pages/Products";
import ProductDetails from "./components/sub-components/product/ProductDetails";
import Checkout from "./components/Pages/Checkout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/headphones",
        element: <Headphones />,
      },
      {
        path: "/speakers",
        element: <Speakers />,
      },
      {
        path: "/earphones",
        element: <Earphones />,
      },
      {
        path: "/:pathName/:id",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
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
