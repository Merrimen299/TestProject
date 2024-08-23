import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout";
import Main from "../pages/Main";
import * as React from "react";
import Auth from "../pages/Auth";
import {taskAction} from "../components/Board";
import {taskLoader} from "../components/Board";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'task',
                action: taskAction,
                loader: taskLoader,
                element: <Main />
            },
            {
                path: 'main',
                action: taskAction,
                loader: taskLoader,
                element: <Main />
            },
            {
                path: 'auth',
                element: <Auth />
            },

        ]
    }
])