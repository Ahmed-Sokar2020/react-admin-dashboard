import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import ThemeProvider from "./context/ThemeProvider";

import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";

const Home = lazy(() => import("./pages/home/Home"));
const Products = lazy(() => import("./pages/products/Products"));
const Users = lazy(() => import("./pages/users/Users"));
const User = lazy(() => import("./pages/user/User"));
const Product = lazy(() => import("./pages/product/Product"));
const NotFound = lazy(() => import("./pages/not found/NotFound"));

const Layout = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <Navbar />

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>

          <div className="contentContainer">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
