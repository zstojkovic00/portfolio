import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from "react-router-dom";
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';




const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: 300,
        height: 300,
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
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    },[])


    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };


    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    <img src={LogoTitle} alt = "developer" />
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/" onClick={menuToggleHandler}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" onClick={menuToggleHandler}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience" onClick={menuToggleHandler}>
                                Experience
                            </Link>
                        </li>

                    </ul>

                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <SegmentIcon onClick={menuToggleHandler} />
                    ) : (
                        <CloseIcon onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;