import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Header/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="mb-12">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;