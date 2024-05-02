import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import PropertyDetails from "./components/PropertyDetails.jsx";
import FavProperties from "./components/FavProperties.jsx";
import Properties from "./components/Properties.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Profile from "./components/Profile.jsx";
import UpdateProfile from "./components/UpdateProfile.jsx";
import {HelmetProvider} from "react-helmet-async";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/favproperties',
                element: <PrivateRoute><FavProperties></FavProperties></PrivateRoute>,
                loader: () => fetch('../properties.JSON')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/property/:id',
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: () => fetch('../properties.JSON')
            },
            {
                path: '/properties',
                element: <Properties></Properties>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            }
        ]
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>
);
