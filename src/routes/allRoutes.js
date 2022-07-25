import React from "react";
import Home from '../views/Home';
import Profile from "../views/Profile";
import SavedBookList from "../views/SavedBookList";

const allRoutes = [
    {path: "/", component: Home },
    {path: "/profile", component: Profile },
    {path: "/saved_booklist", component: SavedBookList },
];

export default allRoutes;
