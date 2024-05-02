import React, {useContext} from 'react';
import AuthProvider , {AuthContext} from "../providers/AuthProvider.jsx";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if (loading){
        return <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/199956/loading-loader.svg" alt="Loading icon"/>
    }
    if (user){
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}