import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import ProductLayout from "../layouts/ProductLayout";
import AuthLayout from "../layouts/AuthLayout"; // Import AuthLayout

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login"; // Import Login
import Register from "../pages/Register"; // Import Register

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "/products/:id",
        element: <ProductLayout />,
        children: [
            {
                index: true,
                element: <ProductDetail />,
            },
        ],
    },
    {
        path: "/auth", // Sử dụng AuthLayout cho các trang đăng nhập và đăng ký
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
