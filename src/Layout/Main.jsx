import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {

    const location = useLocation()
    const noHeaderAndFooter = location.pathname.includes("login") || location.pathname.includes("signup")
    return (
        <div>
           {noHeaderAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderAndFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;