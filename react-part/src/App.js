import React, { useState, useEffect } from "react"
import { Route, Routes, useNavigate } from 'react-router-dom';

import LoginPage from "./pages/login/index"
import Home from "./pages/home/index";
import About from "./pages/About/index";
import Logout from "./pages/Logout/index";
import Profile from "./pages/Profile/index";
import Passbook from "./pages/Passbook/index";
import Order from "./pages/Order/index";

import { UserLoggedOut } from "./api/auth";

import Loading from "@mui/material/CircularProgress";

import Drawer from "./components/drawer";



export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoggedInCheck, setIsLoggedInCheck] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(function() {
        const token = localStorage.getItem("token")

        if (token) {
            setIsLoggedIn(true);
        }

        setIsLoggedInCheck(true);
    }, [])

    function setAuth() {
        setIsLoggedIn(true)
    }

    async function userLogout() {
        setIsLoading(true)
        await UserLoggedOut();
        localStorage.clear()
        setIsLoggedIn(false);
        setIsLoading(false)
        navigate("/", { replace: true })

    }

    function loggedOut() {
        localStorage.clear()
        setIsLoggedIn(false);
        navigate("/", { replace: true })
    }

    let loggedInUserName = localStorage.getItem("name");

    let content = "";

    if (isLoggedInCheck) {
        if (isLoggedIn) {
            content = ( <
                >
                <
                Drawer > < Routes >
                <
                Route path = "/"
                element = { < Home / > }
                /> <
                Route path = "/About"
                element = { < About / > }
                / > <
                Route path = "/order"
                element = { < Order / > }
                / > <
                Route path = "/passbook"
                element = { < Passbook / > }
                / > <
                Route path = "/profile"
                element = { < Profile userLogout = { userLogout }
                    isLoading = { isLoading }
                    username = { loggedInUserName }
                    / > } / >
                    <
                    Route path = "/logout"
                    element = { < Logout logout = { loggedOut }
                        / > } / >
                        <
                        /
                        Routes > < /Drawer> < / > )
                }
                else {
                    content = <
                        LoginPage setAuth = { setAuth }
                    / >
                }
            }
            else {
                content = < Loading / >
            }

            return <
                >
                { content } < />

        }