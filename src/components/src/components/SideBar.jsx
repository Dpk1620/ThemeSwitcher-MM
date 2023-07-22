import React, { useState } from 'react';
import { useThemeContext } from "../context/ThemeContext"
import Headers from './Headers';
import Footer from './Footer';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,

} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Sidebar = ({ children }) => {
    const { color } = useThemeContext(useThemeContext)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        },
    ]
    return (
        <div className="abc" >
            <div style={{ width: isOpen ? "200px" : "50px", backgroundColor: color }} className="sidebar" >
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main className='main_Con'>
                <Headers />
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default Sidebar;