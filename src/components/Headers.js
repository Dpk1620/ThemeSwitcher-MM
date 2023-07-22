import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useThemeContext } from '../context/ThemeContext'
const Header = () => {
    const [Page, setPage] = useState('Dashboard')
    const [menuOpen, setMenuOpen] = useState(false);
    const { color } = useThemeContext(useThemeContext)
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);


    return (
        <header className={classes.header} style={{ backgroundColor: color }}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    {Page}
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""
                        }`}
                >
                    <ul>
                        <li>
                            <Link to="/" onClick={() => setPage("Dashboard")}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setPage("About")}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/analytics" onClick={() => setPage("Analytics")}>
                                Analytics
                            </Link>
                        </li>
                    </ul>
                    <Link to="/setting">
                        <button onClick={() => setPage("Setting")} >Settings</button>
                    </Link>
                </nav>

            </div>
        </header>
    );
};

export default Header;