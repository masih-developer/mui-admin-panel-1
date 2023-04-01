import Home from "./pages/Home";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <Users /> },
    { path: "/newuser", element: <NewUser /> },
    { path: "/products", element: <Products /> },
    { path: "*", element: <p>404 NotFound</p> },
];

export default routes;
