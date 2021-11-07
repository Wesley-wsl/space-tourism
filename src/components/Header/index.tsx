/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import iconClose from "../../assets/shared/icon-close.svg";
import iconHamburger from "../../assets/shared/icon-hamburger.svg";
import Logo from "../../assets/shared/logo.svg";
import { Container, MenuMobile } from "./styles";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    useEffect(() => {
        const li = document.querySelectorAll("li[data-li]");
        switch (location.pathname) {
            case "/":
                li[0].classList.add("activeNav");
                break;
            case "/destination":
                li[1].classList.add("activeNav");
                break;
            case "/crew":
                li[2].classList.add("activeNav");
                break;
            case "/technology":
                li[3].classList.add("activeNav");
                break;
            default:
                break;
        }
    });

    return (
        <Container>
            <div className="logo">
                <img src={Logo} alt="space-tourism logo" />
            </div>

            <nav>
                <ul>
                    <li data-li>
                        <Link to="/">
                            <span>00</span> HOME
                        </Link>
                    </li>
                    <li data-li>
                        <Link to="destination">
                            <span>01</span> DESTINATION
                        </Link>
                    </li>
                    <li data-li>
                        <Link to="/crew">
                            <span>02</span> CREW
                        </Link>
                    </li>
                    <li data-li>
                        <Link to="/technology">
                            <span>03</span> TECHNOLOGY
                        </Link>
                    </li>
                </ul>
            </nav>

            <MenuMobile isOpen={isOpen}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <span>00</span> HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/destination">
                                <span>01</span>DESTINATION
                            </Link>
                        </li>
                        <li>
                            <Link to="/crew">
                                <span>02</span>CREW
                            </Link>
                        </li>
                        <li>
                            <Link to="/technology">
                                <span>03</span>TECHNOLOGY
                            </Link>
                        </li>
                    </ul>
                </nav>
                {isOpen ? (
                    <img
                        src={iconClose}
                        alt="iconMenuClosed"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                ) : (
                    <img
                        src={iconHamburger}
                        alt="iconMenuHamburger"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                )}
            </MenuMobile>
        </Container>
    );
};

export default Header;
