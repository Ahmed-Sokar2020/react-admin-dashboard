import { lazy, Suspense } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import ThemeProvider from "./context/ThemeProvider";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import "./styles/global.scss";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home/Home"));
const Products = lazy(() => import("./pages/products/Products"));
const Users = lazy(() => import("./pages/users/Users"));
const User = lazy(() => import("./pages/user/User"));
const Product = lazy(() => import("./pages/product/Product"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

// Layout component
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

// BrowserRouter configuration
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, // Home page
        { path: "users", element: <Users /> },
        { path: "users/:id", element: <User /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <Product /> },
        { path: "*", element: <NotFound /> }, // fallback page
      ],
    },
  ],
  {
    // Set basename dynamically for GitHub Pages
    basename: import.meta.env.PROD ? "/react-admin-dashboard" : "/",
  },
);

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
