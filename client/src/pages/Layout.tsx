import {FC} from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header";
import * as React from "react";

const Layout: FC = () => {
    return(
        <div className="">
            <div>
                <Header/>
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout