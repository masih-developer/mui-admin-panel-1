import Home from "./pages/Home";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Product from "./pages/Product";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <Users /> },
    { path: "/newuser", element: <NewUser /> },
    { path: "/products", element: <Products /> },
    { path: "/product/:productId", element: <Product /> },
    { path: "*", element: <p>404 NotFound</p> },
];

export default routes;
