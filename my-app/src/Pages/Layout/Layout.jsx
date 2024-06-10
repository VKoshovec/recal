import { NavLink, Outlet } from "react-router-dom";


const Layout = () => {
    return (
    <div>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
        <hr/>
        <Outlet/>
    </div>
    );
};

export default Layout;